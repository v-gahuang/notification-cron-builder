import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';

class AddNotifications extends Component {
  constructor() {
    super();
    this.state = {
      jobName: '',
      groupName: '',
      nextFireDatetime: '',
      nextFireTime: '',
      notificationCrons: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(e) {
    e.preventDefault();
    let tempNotification = {
      jobName: this.state.jobName,
      groupName: this.state.groupName,
      nextFireDatetime: this.state.nextFireDatetime + ' ' + this.state.nextFireTime,
      notificationCrons: this.state.notificationCrons
    };

    this.props.addNotification(tempNotification);

    this.setState({
      jobName: '',
      groupName: '',
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

  render() {
    return (
      <div
        className={
          'card textcenter mt-3 ' +
          (this.props.formDisplay ? '' : 'add-notification')
        }
      >
        <div
          className="apt-addheading card-header bg-primary text-white"
          onClick={this.props.toggleForm}
        >
          <FaPlus /> Add Notification
        </div>

        <div className="card-body">
          <form id="aptForm" noValidate onSubmit={this.handleAdd}>
            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="jobName"
                readOnly
              >
                Job Name
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="jobName"
                  placeholder="Job's Unique Name"
                  value={this.state.jobName}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="groupName"
              >
                Job Group
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="groupName"
                  placeholder="Group's Name"
                  value={this.state.groupName}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label className="col-md-2 text-md-right" htmlFor="notificationCrons">
                Apt. Notes
              </label>
              <div className="col-md-10">
                <textarea
                  className="form-control"
                  rows="4"
                  cols="50"
                  name="notificationCrons"
                  id="notificationCrons"
                  placeholder="Notification Notes"
                  value={this.state.notificationCrons}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row mb-0">
              <div className="offset-md-2 col-md-10">
                <button
                  type="submit"
                  className="btn btn-primary d-block ml-auto"
                >
                  Add Notification
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddNotifications;
