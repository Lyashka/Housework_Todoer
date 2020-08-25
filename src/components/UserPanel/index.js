import React, { Component } from "react";
import './userPanel.scss';

export default class UserCard extends Component {
  constructor(props) {
    super(props);

    this.name = this.props.name;
    //this.role = this.props.role;
    // Link to photo on the Internet
    //this.pathToAvatar = '../icons/' + this.name;

    this.state = {
      isChangePassword: false,
    }

    this.handleClickChangePassword = this.handleClickChangePassword.bind(this);
    this.handleRejectChangePassword = this.handleRejectChangePassword.bind(this);
  }

  handleClickChangePassword() {
    this.setState({
      isChangePassword: true,
    })
  }

  handleRejectChangePassword() {
    this.setState({
      isChangePassword: false,
    })
  }

  handleAcceptChangePassword() {

  }

  render() {
    return (
      <>
        <div className="container-user">
          <div className="user">
            <div className="user__avatar">
              <img className="user__img" />
            </div>

            <div className="user__information">
              <div className="user__header">
                <a className="leave-user-button">
                  Leave
              </a>
              </div>
              <div className="user__body">
                <div className="user__text">
                  <p className="user__greeting">{'Hello, ' + this.name + '!'}</p>
                  <button className="change-password-button" onClick={this.handleClickChangePassword}>Change password</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            {this.state.isChangePassword ?
              <div className="user__footer">
                <form className="user__form">
                  <label className="label-for-user-password">New password
                        <input className="user-password" type="password">
                    </input>
                  </label>
                  <div className="buttons-change-password">
                    <button className="reject-change-password-button" type="button" onClick={this.handleRejectChangePassword}>
                      Cancel
                </button>
                    <button className="accept-change-password-button" type="submit">
                      Save
                </button>
                  </div>
                </form>
              </div>
              :
              <></>}
          </div>
        </div>

        <div className="child-user user_lily">
          <img className="child_user__avatar avatar_lily" />
          <div>
            <div className="child-user__text childs-information">
              <p className="childs-information__name">Lily</p>
              <p className="childs-information__coins">95 HC</p>
            </div>
            <button className="change-HC-button">Change HC amount</button>
          </div>
        </div>
        <div className="child-user user_mary">
          <img className="child_user__avatar avatar_mary" />
          <div>
            <div className="child-user__text childs-information">
              <p className="childs-information__name">Mary</p>
              <p className="childs-information__coins">225 HC</p>
            </div>
            <button className="change-HC-button">Change HC amount</button>
          </div>
        </div>
      </>
    );
  }
}
