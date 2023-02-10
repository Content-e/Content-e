export const validateEmail = (email: string): string | null => {
  const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (email.length < 1) {
    return "Please enter your email address";
  }
  if (!emailRegExp.test(email)) {
    return "Please enter the correct email address";
  }
  return null;
};

export const validatePassword = (password: string): string | null => {
  if (password.length < 1) {
    return "Please enter your password";
  }
  if (password.length < 8) {
    return "Password must be at least 8 characters";
  }
  return null;
};

export const validateVerificationCode = (code: string): string | null => {
  const digitMatcher = /^[0-9]{1,}$/;
  const lengthMatcher = /^.{6}$/;
  if (!digitMatcher.test(code)) return "Invalid character. Input only digits";
  if (!lengthMatcher.test(code)) return "Invalid character length";
  return null;
};
