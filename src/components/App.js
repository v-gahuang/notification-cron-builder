import React, { Component } from 'react';
import '../css/App.css';

import AddNotifications from './AddNotifications';
import ListNotifications from './ListNotifications';

import { without } from 'lodash';

class App extends Component {
  constructor() {
    super();
    this.state = {
      myNotifications: [],
      formDisplay: false,
      lastIndex: 0
    };
    this.deleteNotification = this.deleteNotification.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.addNotification = this.addNotification.bind(this);
  }

  toggleForm() {
    this.setState({
      formDisplay: !this.state.formDisplay
    });
  }

  addNotification(notification) {
    let tempNotifications = this.state.myNotifications;
    notification.notificationId = this.state.lastIndex;
    tempNotifications.unshift(notification);
    this.setState({
      myNotifications: tempNotifications,
      lastIndex: this.state.lastIndex + 1
    });
  }

  deleteNotification(notification) {
    let tempNotifications = this.state.myNotifications;
    tempNotifications = without(tempNotifications, notification);

    this.setState({
      myNotifications: tempNotifications
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
                <AddNotifications
                  formDisplay={this.state.formDisplay}
                  toggleForm={this.toggleForm}
                  addNotification={this.addNotification}
                />
                <ListNotifications
                  notifications={this.state.myNotifications}
                  deleteNotification={this.deleteNotification}
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
