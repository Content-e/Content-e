import "./creatorNotifications.css";

export default function CreatorNotifications() {
  return (
    <div className="creator-notifications-container">
      <div className="creator-notifications-label">Notifications</div>

      <div className="creative-notification-container">
        <img src="/images/feature-notification.svg" />
        <div className="notifiation-container">
          <div className="notification-label">
            Your creative for SA Tourism is in review
          </div>
          <div className="notification-timeline">5m ago</div>
        </div>
      </div>
    </div>
  );
}
