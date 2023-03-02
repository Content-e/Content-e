import {
  getMainDomainFromSubdomain,
  isSubDomainWithBriefId,
  replaceSubPath,
} from "components";
import { FC, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { UnAuthRoutes } from "utils";
import "./styles.css";

interface Props {
  isAuthenticated?: boolean;
}
export const CoBrandedMainPage: FC<Props> = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const goToLogin = (): void =>
    history.push(replaceSubPath(UnAuthRoutes.Login));

  useEffect(() => {
    if (!isSubDomainWithBriefId(id))
      window.location.href = getMainDomainFromSubdomain();
  }, []);

  return (
    <div className="cobranded-container">
      <div className="cobranded-logo-container">
        <div className="cobranded-title">Introducing EDCSquared and</div>
        <img src="/images/inspiring-ways.svg" alt="inspring-ways" />
      </div>
      <div className="cobranded-description-container">
        <div className="cobranded-description">
          Want to become a content creator? Share your TikToks showcasing why
          people should visit South Africa and be rewarded
        </div>
        <div className="cobranded-link-btn">
          <span className="cobranded-link-btn-text" onClick={goToLogin}>
            Link creative
          </span>
        </div>
      </div>
    </div>
  );
};

export default CoBrandedMainPage;
