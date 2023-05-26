import { useState, FC, useMemo } from "react";
// import { IconLoader, Input } from "components";
import { defaultSignUpError, defaultSignUpState } from "utils";
import { useSignup } from "hooks";
import { validateEmail, validateFullName, withAuth } from "state/auth";
import { UnAuthRoutes } from "utils";
import { useHistory } from "react-router-dom";
import "./styles/login.scss";
// import GoogleLogin from "./googleLogin";
import { USER_TYPES } from "API";
//import Navbar from "components/navbar/navbar";
//import GoogleLogin from "./googleLogin";
import { Input } from "components/customInput";
import { IconLoader } from "components/loader";
//import ShouldRender from "components/shouldRender";
//import AuthFooter from "./authFooter";
//import * as S from "../../components/customInput/styles"; // TODO: separate select into its own component
import Modal from "./modal";
import HeaderDesktop from "components/authentication/components/header-desktop";
import HeaderMobile from "components/authentication/components/header-mobile";

export const Register: FC = () => {
  const [creator, setCreator] = useState<boolean | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const path = window.location.pathname;
  const history = useHistory();

  const {
    performAction,
    res: { isLoading },
  } = useSignup();

  const [signUpState, setSignUpState] = useState(defaultSignUpState);
  const [signUpError, setSignUpError] = useState(defaultSignUpError);

  const updateState = (key: string, value: string): void => {
    setSignUpError((prev) => ({ ...prev, [key]: null }));
    setSignUpState((prev) => ({ ...prev, [key]: value }));
  };

  const validateSignUpForm = (): boolean => {
    const emailError = validateEmail(signUpState.email);
    // TODO: handle password later
    // const passwordError = validatePassword(signUpState.password);
    const fullNameError = validateFullName(signUpState.name);
    const roleError = creator === null ? "Please select" : null;

    const notValidated = emailError || fullNameError || roleError;
    if (notValidated)
      setSignUpError({
        email: emailError,
        password: null,
        name: fullNameError,
        ["role-select"]: roleError,
      });

    return !!notValidated;
  };

  //const onLogin = (): void => history.push(UnAuthRoutes.Login);
  const onSignUp = async (e): Promise<void> => {
    e.preventDefault();
    localStorage.setItem(
      "userType",
      creator ? USER_TYPES.CREATIVE_USER : USER_TYPES.BRAND_USER
    );
    if (!validateSignUpForm()) {
      await performAction(signUpState);
      setIsModalOpen(true);
    }
  };

  const isSubmittable = useMemo(
    () => Object.values(signUpError).every((item) => item === null),
    [signUpError]
  );

  const commonProps = {
    handlers: { state: signUpState, error: signUpError, updateState },
  };

  /*const toggleMenu = (): void => {
    setShowMenu(!showMenu);
    const html = document.documentElement;
    if (html.classList.contains("is-locked")) {
      html.classList.remove("is-locked");
    } else {
      html.classList.add("is-locked");
    }
  };*/

  const handleRoleChange = (e: any) => {
    if (e.target.value === "creator") {
      setCreator(true);
    } else {
      setCreator(false);
    }
  };

  //const burgerIcon = "/images/hamburger.svg";
  //const crossIcon = "/images/cross.svg";

  return (
    <div className="login">
      <HeaderMobile />
      <div className="login__wrap">
        <HeaderDesktop />
        <div className="signup__container">
          <div className="signup__title">
            Create a {!creator ? "Brand" : "Creator"} account
          </div>
          <div className={`${creator ? "active" : false} btns-container`}>
            <div
              className={`${!creator ? "active" : false}`}
              onClick={() => setCreator(false)}
            >
              Join as a brand
            </div>
            <div
              className={`${creator ? "active" : false}`}
              onClick={() => setCreator(true)}
            >
              Join as a creator
            </div>
          </div>
          <div className="signup__container-form">
            <form>
              <div className="signup__container-form-field">
                <Input {...commonProps} placeholder="Name" keyProp="name" />
              </div>
              <div className="signup__container-form-field">
                <Input
                  {...commonProps}
                  placeholder="email@address.com"
                  keyProp="email"
                />
              </div>
              <div className="signup__container-form-field">
                <select
                  name="role"
                  id="role-select"
                  placeholder="Please select"
                  onChange={(e) => handleRoleChange(e)}
                >
                  <option value="" disabled selected hidden>
                    Please select
                  </option>
                  <option value="brand">Brand</option>
                  <option value="creator">Creator</option>
                </select>
                {/*<p>
                  <ShouldRender if={signUpError["role-select"]}>
                    <S.ParagraphError>
                      {signUpError["role-select"]}
                    </S.ParagraphError>
                  </ShouldRender>
                </p>*/}
              </div>
              <div className="signup__container-form-field">
                <Input {...commonProps} placeholder="Hi there..." keyProp="" />
              </div>
              <button
                className="signup__container-form-register-button"
                onClick={onSignUp}
                disabled={isLoading || !isSubmittable}
              >
                <span style={isLoading ? { marginRight: 12 } : {}}>
                  Register
                </span>
                {isLoading && <IconLoader />}
              </button>
              <div className="login__already">
                Don’t have an account? <span onClick={onSignUp}>Sign up</span>
              </div>
            </form>
          </div>
        </div>
        <div className="login__landing">
          <img src="/images/login-image.png" />
        </div>
      </div>
      <div className="landing-footer">
        <div className="landing-footer-text-container">
          <div
            className="landing-footer-text"
            onClick={() => history.push(UnAuthRoutes.Landing)}
          >
            Home
          </div>
          <div
            className="landing-footer-text"
            onClick={() => history.push(UnAuthRoutes.Creators)}
          >
            For Creators
          </div>
          <div
            className="landing-footer-text"
            onClick={() => history.push(UnAuthRoutes.Brands)}
          >
            For Brands
          </div>
          <div
            className="landing-footer-text"
            onClick={() => history.push(UnAuthRoutes.SayHello)}
          >
            Say Hello
          </div>
          <div
            className="landing-footer-text"
            onClick={() => history.push(UnAuthRoutes.SayHello)}
          >
            Say Hello
          </div>
          <div
            className="landing-footer-text"
            onClick={() =>
              path === "/homePageLogin"
                ? history.push(UnAuthRoutes.Register)
                : history.push(UnAuthRoutes.Login)
            }
          >
            Login / Sign up
          </div>
        </div>

        <div className="landing-footer-img-container">
          <a
            target="_blank"
            href="https://www.linkedin.com/company/edcsquared/"
          >
            <img src="/images/landing-linkedin.svg" />
          </a>
          <a target="_blank" href="https://www.instagram.com/edcsq/">
            <img src="/images/landing-insta.svg" />
          </a>
          <a target="_blank" href="https://www.tiktok.com/@edcsquared">
            <img src="/images/landing-tiktok.svg" />
          </a>
        </div>

        <div className="landing-footer-text">
          © 2023 Copyright EDC Squared. All Rights Reserved.
        </div>
        <Modal isOpen={isModalOpen} handleClose={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
};

export default withAuth(Register);
