import { FC, useEffect } from "react";

import { FormInput, IconLoader } from "components";
import HeaderDesktop from "components/authentication/components/header-desktop";
import HeaderMobile from "components/authentication/components/header-mobile";
import { Link, useHistory } from "react-router-dom";

import { useLogin } from "hooks";
import { withAuth } from "state/auth";
import { AuthProps, UnAuthRoutes, unverifiedUser } from "utils";

import useZodForm from "hooks/useZodForm";
import { z } from "zod";
import Footer from "./components/footer";
import "./styles/login.scss";
import Checkbox from "components/ui/checkbox";
import { Auth } from "aws-amplify";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().nonempty("Please enter your password"),
  remember: z.boolean().default(false),
});

export const Login: FC<AuthProps> = ({ getAuth }) => {
  const history = useHistory();
  const params = new URL(location.href).searchParams;
  const {
    res: { error, success },
    performAction,
  } = useLogin();

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid, isDirty, isSubmitting },
  } = useZodForm({
    schema: loginSchema,
    defaultValues: {
      email: localStorage.getItem("userEmail") || "",
      password: "",
      remember: false,
    },
    mode: "onBlur",
  });

  const formState = watch();

  const onSubmit = handleSubmit(async (data) => {
    await performAction(data);
    if (data.remember) {
      localStorage.setItem("userEmail", data.email);
      const result = await Auth.rememberDevice();
      console.log("Device remembered: ", result);
    }
  });

  useEffect(() => {
    if (error === unverifiedUser)
      history.push(UnAuthRoutes.Reverify, { ...formState });
    else if (success) getAuth();
  }, [success, error]);

  return (
    <>
      <div className="login">
        <HeaderMobile />
        <div className="login__wrap">
          <HeaderDesktop />
          <div className="login__content">
            <div className="w-full flex justify-around">
              <div className="login__container">
                <div className="login__box">
                  <div className="login__title">Login</div>
                  <div className="login__fields">
                    <FormInput
                      name="email"
                      placeholder="Email Address"
                      register={register}
                      errors={errors}
                    />
                    <FormInput
                      name="password"
                      type="password"
                      placeholder="Password"
                      register={register}
                      errors={errors}
                    />
                  </div>
                  <div className="login__forgot-box">
                    {" "}
                    <div className="login__checkbox">
                      <Checkbox name="remember" control={control} />
                      <span className="login__remember">Remember me.</span>{" "}
                    </div>{" "}
                    <Link
                      className="login__forgot"
                      to={UnAuthRoutes.ForgetPassword}
                    >
                      <span>Forgot Password?</span>{" "}
                    </Link>{" "}
                  </div>
                  <div className="login__bottom">
                    <button
                      className="login__btn"
                      onClick={onSubmit}
                      disabled={!isValid || !isDirty || isSubmitting}
                    >
                      <span style={isSubmitting ? { marginRight: 12 } : {}}>
                        Login
                      </span>
                      {isSubmitting && <IconLoader />}
                    </button>
                    <div className="login__already">
                      Don’t have an account?{" "}
                      <Link
                        to={
                          UnAuthRoutes.Register + "?role=" + params.get("role")
                        }
                      >
                        Sign up
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="login__landing">
              <img src="/images/login-image.png" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default withAuth(Login);
