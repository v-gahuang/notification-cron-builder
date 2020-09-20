import React, { Component } from 'react';
import '../css/App.css';

import UpdateNotifications from './UpdateNotifications';
import ListNotifications from './ListNotifications';

import { findIndex, without } from 'lodash';

class App extends Component {
  state = {
    myNotifications: [],
    formDisplay: false,
    lastIndex: 0,
    selectedNotification: {},
  };

  toggleForm =()=> {
    this.setState({
      formDisplay: !this.state.formDisplay
    });
  }

  updateNotification = (notification)=> {
    let tempNotifications = this.state.myNotifications;
    let notificationIndex = findIndex(this.state.myNotifications, {
      jobName: notification.jobName
    });
    tempNotifications[notificationIndex].notificationCrons = notification.notificationCrons;
    this.setState({
      myNotifications: tempNotifications,
    });
  }

  editNotification = (notification)=> {
      this.setState({
        selectedNotification: notification,
        formDisplay: true
      });
  }

  cancelSelect = () => {
    console.log("cancelSelect");
    this.setState({
      selectedNotification: {}
    });
  }

  componentDidMount() {
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
        const notifications = result.map(item => {
          item.notificationId = this.state.lastIndex;
          this.setState({ lastIndex: this.state.lastIndex + 1 });
          return item;
        });
        this.setState({
          myNotifications: notifications
        });
      });
  }

  render() {
   
    return (
      <main className="page bg-white" id="jobratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <UpdateNotifications
                  formDisplay={this.state.formDisplay}
                  toggleForm={this.toggleForm}
                  selectedNotification={this.state.selectedNotification}
                  updateNotification={this.updateNotification}
                  cancelSelect={this.cancelSelect}
                />
                <ListNotifications
                  notifications={this.state.myNotifications}
                  editNotification={this.editNotification}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
