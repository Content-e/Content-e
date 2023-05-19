import { useState, FC, useMemo } from "react";
// import { IconLoader, Input } from "components";
import { useHistory, Link } from "react-router-dom";
import { defaultSignUpError, defaultSignUpState, UnAuthRoutes } from "utils";
import { useSignup } from "hooks";
import { validateEmail, validateFullName, withAuth } from "state/auth";

import "./styles/login.scss";
// import GoogleLogin from "./googleLogin";
import { USER_TYPES } from "API";
import Navbar from "components/navbar/navbar";
//import GoogleLogin from "./googleLogin";
import { Input } from "components/customInput";
import { IconLoader } from "components/loader";
import ShouldRender from "components/shouldRender";
//import AuthFooter from "./authFooter";
import * as S from "../../components/customInput/styles"; // TODO: separate select into its own component
import Modal from "./modal";

export const Register: FC = () => {
  const [creator, setCreator] = useState<boolean | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const history = useHistory();
  const {
    performAction,
    res: { isLoading },
  } = useSignup();
  const openContactUs = (): void => {
    window.location.href = "mailto:hello@edcsquared.io";
  };

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

  const onLogin = (): void => history.push(UnAuthRoutes.Login);
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

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = (): void => {
    setShowMenu(!showMenu);
    const html = document.documentElement;
    if (html.classList.contains("is-locked")) {
      html.classList.remove("is-locked");
    } else {
      html.classList.add("is-locked");
    }
  };

  const handleRoleChange = (e: any) => {
    if (e.target.value === "creator") {
      setCreator(true);
    } else {
      setCreator(false);
    }
  };

  const burgerIcon = "/images/hamburger.svg";
  const crossIcon = "/images/cross.svg";

  return (
    <div className="login">
      <div className="mobile-header">
        <div className="mobile-header-top">
          <img
            src="/images/edc-logo.svg"
            alt="edc-squared"
            className="mobile-header__logo"
          />
          <img
            className="mobile-header__burger"
            src={showMenu ? crossIcon : burgerIcon}
            alt="edc-squared"
            onClick={toggleMenu}
          />
        </div>
        {showMenu && (
          <div className="mobile-header-menu">
            <Link to={"/landing"}>HOME</Link>
            <Link to={"/forCreators"}>FOR CREATORS</Link>
            <Link to={"/forBrands"}>FOR BRANDS</Link>
            <Link to={"/sayHello"}>SAY HELLO</Link>
            <Link className="button" onClick={onLogin} to={"#"}>
              LOGIN / SIGN UP
            </Link>
            <div className="login__social-links mobile-menu-links">
              <li>
                <img src="images/linkedin-mobile.svg" alt="" />
              </li>
              <li>
                <img src="images/instagram-mobile.svg" alt="" />
              </li>
              <li>
                <img src="images/tiktok-mobile.svg" alt="" />
              </li>
            </div>
          </div>
        )}
      </div>
      <div className="login__wrap">
        <div className="login__top">
          <img
            src="/images/edc-logo.svg"
            alt="edc-squared"
            className="login__logo"
          />
          <Navbar />
        </div>
        <div className="signup__container">
          <div className="signup__container-description">
            <div>
              <h1>Get In Touch To Sign Up!</h1>
              <p>
                Whether you’re a brand, creator or agency.
                <br />
                We’d love to have you as part of the EDC squared community. Fill
                in the form on the right to get started.
                <br />
                <br />… Or feel free to drop us an email.
              </p>
            </div>
            <p className="signup__container-description-email">
              hello@edcsquared.io
            </p>
          </div>
          <div className="signup__container-form">
            <form>
              <div className="signup__container-form-name-container">
                <div className="signup__container-form-field">
                  <label>Name</label>
                  <Input {...commonProps} placeholder="Name" keyProp="name" />
                </div>
                <div className="signup__container-form-field">
                  <label>Email</label>
                  <Input
                    {...commonProps}
                    placeholder="email@address.com"
                    keyProp="email"
                  />
                </div>
              </div>
              <div className="signup__container-form-field">
                <label>Who are you?</label>
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
                <p>
                  <ShouldRender if={signUpError["role-select"]}>
                    <S.ParagraphError>
                      {signUpError["role-select"]}
                    </S.ParagraphError>
                  </ShouldRender>
                </p>
              </div>
              <div className="signup__container-form-field">
                <label>Tell us a little more about you</label>
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
            </form>
          </div>
        </div>
      </div>
      <div className="login__footer">
        <ul className="login__navbar">
          <li>
            <Link to={"/landing"}>HOME</Link>
          </li>
          <li>
            <Link to={"/forCreators"}>FOR CREATORS</Link>
          </li>
          <li>
            <Link to={"/forBrands"}>FOR BRANDS</Link>
          </li>
          <li>
            <Link onClick={openContactUs} to={"/sayHello"}>
              Say hello
            </Link>
          </li>
        </ul>
        <div className="login__social-links">
          <li>
            <img src="images/linkedin.svg" alt="" />
          </li>
          <li>
            <img src="images/instagram.svg" alt="" />
          </li>
          <li>
            <img src="images/tiktok.svg" alt="" />
          </li>
        </div>
        <div className="login__copyright">© 2023 Copyright EDC Squared.</div>
        <Modal isOpen={isModalOpen} handleClose={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
};

export default withAuth(Register);
