import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import withError from "state/error/withErrorHoc";
import { ErrorProps } from "utils";

const LoginPage: FC<ErrorProps> = ({ showError }) => {
  const { search } = useLocation();
  const atsJobID = new URLSearchParams(search).get("atsJobID");
  const jobTitle = new URLSearchParams(search).get("jobTitle");

  useEffect(() => {
    if (atsJobID) {
      localStorage.setItem("atsJobID", atsJobID);
    }
    if (jobTitle) {
      localStorage.setItem("jobTitle", jobTitle);
      showError({
        title: decodeURI(jobTitle),
        message: " Please login or signup to start up the application process",
      });
    }
  }, [atsJobID, jobTitle]);

  return <div>FINALLY THIS IS LOGIN PAGE</div>;
};

export default withError(LoginPage);
