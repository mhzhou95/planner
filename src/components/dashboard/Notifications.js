import React from 'react';
import moment from 'moment';

const Notifications = (props) => {
  const { notifications } = props;
  return (
    <div className="notifications">
      <div>
        <h4 className="notification-header">Notifications</h4>
        <ul>
          {notifications && notifications.map((notification) => {
            return (
              <li className="notification-item" key={notification.id}>
                <p className="notification-time">{notification.content} {}
                  {moment(notification.time.toDate()).fromNow()}</p>
                <p className="notification-name">by {notification.user}   </p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Notifications
