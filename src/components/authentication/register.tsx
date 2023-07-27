import _ from 'lodash';
import {FC, useMemo} from 'react';
import {withAuth} from 'state/auth';
import './styles/login.scss';
import {USER_TYPES} from 'API';
import {IconLoader} from 'components/loader';
import axios from 'axios';
import HeaderDesktop from 'components/authentication/components/header-desktop';
import HeaderMobile from 'components/authentication/components/header-mobile';
import Footer from './components/footer';
import Modal from './modal';
import useZodForm from 'hooks/useZodForm';
import {z} from 'zod';
import init from 'zod-empty';
import {useAuth0} from "@auth0/auth0-react";

const DEFAULT_ROLE = 'brand';

const sendJSONEmail = async (json: { name: string }): Promise<void> => {
    const mailData = JSON.stringify({
        operationName: 'SendEmail',
        variables: {
            data: {
                from: 'no-reply@edcsquared.io',
                message: json,
                name: json.name,
            },
        },
        query:
            'query SendEmail($data: EMAIL_INPUT) {\n  sendEmail(data: $data)\n}\n',
    });

    const res = await axios.post(
        'https://ibqmmfkfajfbvgtxmjzfx3u6rm.appsync-api.us-east-1.amazonaws.com/graphql',
        mailData,
        {
            headers: {
                'x-api-key': 'da2-ndivz7milrarjolsdmpucfdelm',
                'Content-Type': 'application/json',
            },
        }
    );
    console.log(res);
};

export const schema = z.object({
    email: z
        .string()
        .nonempty("Please enter your email address")
        .email("Please enter the correct email address"),
    // password: z.string().nonempty("Please enter your password").min(8),
    name: z.string().nonempty('Please enter your full name'),
    role: z.enum(['brand', 'creator']),
    about: z.string(),
});

export const Register: FC = () => {
    const params = new URL(location.href).searchParams;
    const {loginWithPopup} = useAuth0()

    const defaultRole = useMemo(() => {
        const value = params.get('role');
        if (!value) return DEFAULT_ROLE;
        try {
            return schema.shape.role.parse(value);
        } catch (e) {
            console.log(e);
            return DEFAULT_ROLE;
        }
    }, [params]);

    const {
        handleSubmit,
        setValue,
        reset,
        watch,
        formState: { isSubmitting, isSubmitSuccessful},
    } = useZodForm({
        schema: schema,
        defaultValues: {
            ...init(schema),
            role: defaultRole,
        },
        mode: 'onBlur',
    });

    const role = watch('role') || DEFAULT_ROLE;
    const setRole = (value: z.infer<typeof schema>['role']) =>
        setValue('role', value);

    const onSubmit = handleSubmit((data) => {
        localStorage.setItem(
            'userType',
            {
                creator: USER_TYPES.CREATIVE_USER,
                brand: USER_TYPES.BRAND_USER,
            }[role]
        );
        return sendJSONEmail(data);
    });

    return (
        <div className="login">
            <HeaderMobile/>
            <div className="login__wrap">
                <HeaderDesktop/>
                <div className="login__content">
                    <div className="w-full flex justify-around">
                        <div className="signup__container">
                            <div className="signup__title">
                                Create a {_.capitalize(role)} account
                            </div>
                            <div
                                className={`${
                                    role === 'creator' ? 'active' : false
                                } btns-container`}
                            >
                                <div
                                    className={`${role === 'brand' ? 'active' : false}`}
                                    onClick={() => setRole('brand')}
                                >
                                    Join as a brand
                                </div>
                                <div
                                    className={`${role === 'creator' ? 'active' : false}`}
                                    onClick={() => setRole('creator')}
                                >
                                    Join as a creator
                                </div>
                            </div>
                            <div className="signup__container-form">
                                <form onSubmit={onSubmit}>
                                    <button
                                        className="signup__container-form-register-button"
                                        onClick={async () => {
                                            localStorage.setItem('userType', role === 'brand' ? USER_TYPES.BRAND_USER : USER_TYPES.CREATIVE_USER)
                                            await loginWithPopup()
                                        }}
                                    >
                    <span style={isSubmitting ? {marginRight: 12} : {}}>
                      Register
                    </span>
                                        {isSubmitting && <IconLoader/>}
                                    </button>
                                    <div className="login__already">
                                        Already have an account?{' '}
                                    </div>
                                    <button
                                        // type="submit"
                                        className="login__btn"
                                        // disabled={!isValid || !isDirty || isSubmitting}
                                        onClick={async () => await loginWithPopup()}
                                    >
                      <span style={isSubmitting ? {marginRight: 12} : {}}>
                        Login
                      </span>
                                        {isSubmitting && <IconLoader/>}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="login__landing">
                        <img src="/images/login-image.png"/>
                    </div>
                </div>
            </div>
            <Footer/>
            <Modal
                isOpen={isSubmitSuccessful}
                content="Thank you for registering, a member of the EDC squared team will be in
          touch shortly."
                handleClose={() => reset(undefined, {keepDefaultValues: true})}
            />
        </div>
    );
};

export default withAuth(Register);
