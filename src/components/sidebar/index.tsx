import { FC, Fragment, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import { useHistory, useLocation } from 'react-router-dom';
import {
  AuthRoutes,
  BrandRoutes,
  CreatorRoutes,
  ProfileProps,
  AdminRoutes,
} from 'utils';
import { getPageTitle } from 'components';
import { withProfile } from 'state/profileSteps';
import { USER_TYPES } from 'API';
import { Storage } from 'aws-amplify';

export const MobileHeader: FC<ProfileProps> = ({ profileState: { data } }) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const [profilePic, setProfilePic] = useState<string>();
  const [openedSidebar, setOpenedSidebar] = useState(false);
  const handleSidebarClick = (): void => {
    setOpenedSidebar((prev) => !prev);
  };
  const handleMenuItem = (e: any, route: string): void => {
    e.preventDefault();
    history.push(route);
    setOpenedSidebar((prev) => !prev);
  };

  const onLogout = (): void => history.push(AuthRoutes.Logout);
  const onEditProfile = (): void => history.push(AuthRoutes.EditProfile);

  const getImageFromS3 = async (id: string): Promise<void> => {
    try {
      const url = await Storage.get(`${id}/avatar/profile`);
      fetch(url).then((res) => {
        if (res.status === 200) setProfilePic(url);
      });
    } catch (err) {
      console.log('Error', err);
    }
  };
  const getOption = (
    icon: string,
    route: AuthRoutes | CreatorRoutes | BrandRoutes | AdminRoutes
  ): JSX.Element => {
    const classes = classNames({ selected: pathname.includes(route) });

    return (
      <li
        className={'brand-dashboard__menu-item ' + classes}
        onClick={(e): void => handleMenuItem(e, route)}
      >
        <img alt="" src={icon} />
        <span>{getPageTitle(route)}</span>
      </li>
    );
  };

  const userName = useMemo(() => {
    if (!data?.name?.length) return 'Username';
    else {
      let name = data.name.slice(0, 14);
      if (data.name.length > 14) name += '...';
      return name;
    }
  }, [data]);

  useEffect(() => {
    if (data?.id) getImageFromS3(data.id);
  }, [data]);

  return (
    <>
      <div className="brand-dashboard__mobile-header">
        <a className="brand-dashboard__mobile-logo">
          <img alt="" src="/images/logo-full.png" />
        </a>
        <div className="brand-dashboard__mobile-avatar">
          <img alt="" src={profilePic || '/images/default-image.png'} />
        </div>
      </div>
      <div className="brand-dashboard__mobile-menu">
        <ul>
          <li className="brand-dashboard__menu-item selected" id="dashboard">
            <img alt="" src="images/menu-1.svg" />
          </li>
          <li className="brand-dashboard__menu-item" id="creatives">
            <img alt="" src="images/menu-2.svg" />
          </li>
          <li className="brand-dashboard__menu-item" id="briefs">
            <img alt="" src="images/menu-3.svg" />
          </li>
          <li className="brand-dashboard__menu-item" id="profile">
            <img alt="" src="images/menu-4.svg" />
          </li>
        </ul>
      </div>
      <div
        onClick={handleSidebarClick}
        className={`brand-dashboard__sidebar ${
          openedSidebar ? 'opened' : ''
        }  ${data?.userType === 'CREATIVE_USER' ? 'creative-sidebar' : ''}`}
      >
        <a
          className={`brand-dashboard__logo ${
            openedSidebar ? 'full-logo' : ''
          }`}
        >
          <img
            alt=""
            src={!openedSidebar ? '/images/logo.png' : '/images/logo-full.png'}
          />
        </a>
        <div className="brand-dashboard__avatar-wrap" onClick={onEditProfile}>
          <div
            className="brand-dashboard__avatar"
            style={{
              backgroundImage: `url(${
                profilePic || '/images/default-image.png'
              })`,
            }}
          ></div>
          <span>{userName}</span>
        </div>
        <ul className="list-none brand-dashboard__menu">
          {data?.userType === USER_TYPES.CREATIVE_USER && (
            <Fragment key="creator menu options">
              {getOption('images/menu-1.svg', AuthRoutes.Dashboard)}
              {getOption('images/menu-2.svg', AuthRoutes.CampaignBrief)}
              {getOption('images/menu-3.svg', CreatorRoutes.Wallet)}
              {getOption('images/menu-4.svg', AuthRoutes.BestPractices)}
            </Fragment>
          )}
          {data?.userType === USER_TYPES.BRAND_USER && (
            <Fragment key="creator menu options">
              {getOption('images/menu-1.svg', AuthRoutes.Dashboard)}
              {getOption('images/menu-2.svg', BrandRoutes.Creatives)}
              {getOption('images/menu-3.svg', AuthRoutes.CampaignBrief)}
              {getOption('images/menu-4.svg', BrandRoutes.Brand)}
            </Fragment>
          )}
          {data?.userType === USER_TYPES.ADMIN_USER && (
            <Fragment key="creator menu options">
              {getOption('images/menu-1.svg', AuthRoutes.Dashboard)}
              {getOption('images/menu-2.svg', AdminRoutes.Brands)}
              {getOption('images/menu-3.svg', AdminRoutes.Creators)}
              {getOption('images/menu-4.svg', AuthRoutes.BestPractices)}
              {/*{getOption('images/menu-1.svg', AdminRoutes.AccountCreator)}*/}
            </Fragment>
          )}
        </ul>
        <a className="brand-dashboard__exit" onClick={onLogout}>
          <img alt="" src="/images/exit.svg" />
          <span>Logout</span>
        </a>
      </div>
    </>
  );
};

export default withProfile(MobileHeader);
