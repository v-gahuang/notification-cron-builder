import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';

class UpdateNotifications extends Component {
  constructor() {
    super();
    this.state = {
      notificationCrons: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleUpdate(e) {
    e.preventDefault();
    let tempNotification = {
      ...this.props.selectedNotification,
      notificationCrons: this.state.notificationCrons
    };

    this.props.updateNotification(tempNotification);

    this.setState({
      notificationCrons: ''
    });
    this.props.toggleForm();
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleCancel(e) {
    this.setState({
      notificationCrons: ''
    });
    this.props.toggleForm();
  }

  render() {
    return (
      <div
        className={
          'card textcenter mt-3 ' +
          (this.props.formDisplay ? '' : 'update-notification')
        }
      >
        <div 
          className="apt-ppdateheading card-header bg-primary text-white"
          onClick={this.props.toggleForm}
        >
          <FaPlus /> Update Job Trigger - {this.props.selectedNotification.jobName}
        </div>

        <div className="card-body">
          <form id="aptForm" noValidate onSubmit={this.handleUpdate}>
            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="groupName"
              >
                Old Cron Expressions
              </label>
              <div className="col-md-10">
                <input
                  disabled={true}
                  type="text"
                  className="form-control"
                  name="groupName"
                  placeholder="Group's Name"
                  value={this.props.selectedNotification.notificationCrons}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label className="col-md-2 text-md-right" htmlFor="notificationCrons">
                New Cron Expressions
              </label>
              <div className="col-md-10">
                <textarea
                  className="form-control"
                  rows="4"
                  cols="50"
                  name="notificationCrons"
                  id="notificationCrons"
                  placeholder="Quartz Cron Expressions"
                  value={this.state.notificationCrons}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row mb-0">
              <div className="offset-md-2 col-md-10">
                <button
                  type="submit"
                  className="btn btn-primary ml-auto"
                >
                  Update
                </button>

                <button
                  type="reset"
                  className="btn btn-default pull-left"
                  onClick={this.handleCancel}>
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UpdateNotifications;
