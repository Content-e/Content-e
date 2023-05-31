import _ from "lodash";
import { ChangeEventHandler, FC, useMemo } from "react";
import { withAuth } from "state/auth";
import { UnAuthRoutes } from "utils";
import "./styles/login.scss";
import { USER_TYPES } from "API";
import { IconLoader } from "components/loader";
import axios from "axios";
import HeaderDesktop from "components/authentication/components/header-desktop";
import HeaderMobile from "components/authentication/components/header-mobile";
import { Link } from "react-router-dom";
import Footer from "./components/footer";
import Modal from "./modal";
import useZodForm from "hooks/useZodForm";
import { z } from "zod";
import { FormInput } from "components";

const DEFAULT_ROLE = "brand";

const sendJSONEmail = async (json: { name: string }): Promise<void> => {
  const mailData = JSON.stringify({
    operationName: "SendEmail",
    variables: {
      data: {
        from: "no-reply@edcsquared.io",
        message: json,
        name: json.name,
      },
    },
    query:
      "query SendEmail($data: EMAIL_INPUT) {\n  sendEmail(data: $data)\n}\n",
  });

  const res = await axios.post(
    "https://ibqmmfkfajfbvgtxmjzfx3u6rm.appsync-api.us-east-1.amazonaws.com/graphql",
    mailData,
    {
      headers: {
        "x-api-key": "da2-ndivz7milrarjolsdmpucfdelm",
        "Content-Type": "application/json",
      },
    }
  );
  console.log(res);
};

const signupSchema = z.object({
  email: z.string().email(),
  // password: z.string().nonempty("Please enter your password").min(8),
  name: z.string().nonempty("Please enter your full name"),
  role: z.enum(["brand", "creator"]),
  about: z.string(),
});

export const Register: FC = () => {
  const params = new URL(location.href).searchParams;

  const defaultRole = useMemo(() => {
    const value = params.get("role");
    if (!value) return DEFAULT_ROLE;
    try {
      return signupSchema.shape.role.parse(value);
    } catch (e) {
      console.log(e);
      return DEFAULT_ROLE;
    }
  }, [params]);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful, isDirty },
  } = useZodForm({
    schema: signupSchema,
    defaultValues: {
      email: "",
      name: "",
      role: defaultRole,
      about: "",
    },
    mode: "onBlur",
  });

  const role = watch("role") || DEFAULT_ROLE;
  const setRole = (value: z.infer<typeof signupSchema>["role"]) =>
    setValue("role", value);

  const onSubmit = handleSubmit((data) => {
    localStorage.setItem(
      "userType",
      {
        creator: USER_TYPES.CREATIVE_USER,
        brand: USER_TYPES.BRAND_USER,
      }[role]
    );
    return sendJSONEmail(data);
  });

  const handleRoleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setRole(e.target.value as z.infer<typeof signupSchema>["role"]);
  };

  return (
    <div className="login">
      <HeaderMobile />
      <div className="login__wrap">
        <HeaderDesktop />
        <div className="login__content">
          <div className="w-full flex justify-around">
            <div className="signup__container">
              <div className="signup__title">
                Create a {_.capitalize(role)} account
              </div>
              <div
                className={`${
                  role === "creator" ? "active" : false
                } btns-container`}
              >
                <div
                  className={`${role === "brand" ? "active" : false}`}
                  onClick={() => setRole("brand")}
                >
                  Join as a brand
                </div>
                <div
                  className={`${role === "creator" ? "active" : false}`}
                  onClick={() => setRole("creator")}
                >
                  Join as a creator
                </div>
              </div>
              <div className="signup__container-form">
                <form>
                  <div className="signup__container-form-field">
                    <FormInput
                      placeholder="Full Name"
                      name="name"
                      register={register}
                      errors={errors}
                    />
                  </div>
                  <div className="signup__container-form-field">
                    <FormInput
                      placeholder="Email Address"
                      name="email"
                      register={register}
                      errors={errors}
                    />
                  </div>
                  <div className="signup__container-form-field">
                    <select
                      name="role"
                      placeholder="Who are you?"
                      value={role}
                      onChange={handleRoleChange}
                      className="mb-4"
                    >
                      <option value="brand">Brand</option>
                      <option value="creator">Creator</option>
                    </select>
                  </div>
                  <div className="signup__container-form-field">
                    <FormInput
                      name="about"
                      placeholder={
                        {
                          creator:
                            "Tell us about you and the content you create.",
                          brand:
                            "Tell us a little more about you and your brand.",
                        }[role]
                      }
                      register={register}
                      errors={errors}
                    />
                  </div>
                  <button
                    className="signup__container-form-register-button"
                    onClick={onSubmit}
                    disabled={!isValid || !isDirty || isSubmitting}
                  >
                    <span style={isSubmitting ? { marginRight: 12 } : {}}>
                      Register
                    </span>
                    {isSubmitting && <IconLoader />}
                  </button>
                  <div className="login__already">
                    Already have an account?{" "}
                    <Link to={UnAuthRoutes.Login}>Login</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="login__landing">
            <img src="/images/login-image.png" />
          </div>
        </div>
      </div>
      <Footer />
      <Modal
        isOpen={isSubmitSuccessful}
        content="Thank you for registering, a member of the EDC squared team will be in
          touch shortly."
        handleClose={() => reset(undefined, { keepDefaultValues: true })}
      />
    </div>
  );
};

export default withAuth(Register);
