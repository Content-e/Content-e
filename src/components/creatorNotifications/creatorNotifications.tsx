import moment from "moment";
import { FC, useEffect, useState } from "react";
import {
  ICreatorBriefListProps,
  INotification,
  withCreatorBriefList,
} from "state/dashboard";
import { CreativeRequestStatus } from "utils";
import "./creatorNotifications.css";

export const CreatorNotifications: FC<ICreatorBriefListProps> = ({
  briefList,
  requestList,
  loading,
  error,
}) => {
  const [data, setData] = useState<Array<INotification>>([]);

  const getNotification = (status: CreativeRequestStatus): string => {
    switch (status) {
      case CreativeRequestStatus.New:
        return "created";
      case CreativeRequestStatus.Accept:
        return "accepted";
      case CreativeRequestStatus.Reject:
        return "rejected";
      default:
        return "in review";
    }
  };

  useEffect(() => {
    if (!loading && !error && requestList && briefList) {
      const output = [] as Array<INotification>;
      briefList.forEach((brief) => {
        const { id, brandProfile } = brief || {};

        const { createdAt, updatedAt, status } =
          requestList.find((e) => e?.brandBriefId === id) || {};

        if (status && createdAt !== updatedAt) {
          output.push({
            name: brandProfile?.name,
            status: getNotification(status as CreativeRequestStatus),
            time: moment(updatedAt).fromNow(),
          });
        }
      });
      setData(output);
    }
  }, [briefList, requestList, loading, error]);

  return (
    <div className="creator-notifications-container">
      <div className="creator-notifications-label">Notifications</div>

      {data.map((notify, index) => (
        <div className="creative-notification-container" key={index}>
          <img src="/images/feature-notification.svg" />
          <div className="notifiation-container">
            <div className="notification-label">
              Your creative for {notify.name} is{notify.status}
            </div>
            <div className="notification-timeline">{notify.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default withCreatorBriefList(CreatorNotifications);
