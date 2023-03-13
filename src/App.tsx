import React from "react";
import { Amplify } from "aws-amplify";
import "bootstrap/dist/css/bootstrap.min.css";
import config from "aws-exports";
// import ErrorProvider from "state/error/error.provider";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { AuthProvider } from "state/auth";
// import MainRouter from "./router";
// import { ProfileProvider } from "state/profileSteps";
import "./assets/css/index.css";
import CampaignConfirmationModal from "components/campaignConfirmationModal/campaignConfirmationModal";

Amplify.configure(config);

const App: React.FC = () => {
  return (
    // <ErrorProvider>
    //   <Router>
    //     <div className="App">
    //       <AuthProvider>
    //         <ProfileProvider>
    //           <Route path="/" component={MainRouter} />
    //         </ProfileProvider>
    //       </AuthProvider>
    //     </div>
    //   </Router>
    // </ErrorProvider>

    <CampaignConfirmationModal />
  );
};

export default App;
