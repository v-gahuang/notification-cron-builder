import React, { Component } from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';
import Moment from 'react-moment';

class ListNotifications extends Component {
  render() {
    return (
      <div className="notification-list item-list mb-3">
        {this.props.notifications.map(item => (
          <div className="job-item col media py-3" key={item.notificationId}>
            <div className="mr-3">
              <button
                className="job-edit btn btn-sm btn-primary"
                onClick={() => this.props.editNotification(item)}>
                <FaEdit />
              </button>
            </div>

            <div className="job-info media-body">
              <div className="job-head d-flex">
                <span className="job-name">{item.jobName}</span>
              </div>

              <div className="group-name">
                <span className="label-item">Group: </span>
                <span>{item.groupName}</span>
              </div>
              <div className="notification-notes">
                <span className="label-item">Cron Trigger: </span>
                <span>{item.notificationCrons}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ListNotifications;
