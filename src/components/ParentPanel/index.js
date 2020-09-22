import React, { Component } from "react";
import './parentPanel.scss';

export default class ParentPanel extends Component {
  constructor(props) {
    super(props);

    this.name = this.props.name;

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
        <div className="container-parent">
          <div className="parent">
            <div className="parent__avatar">
              <img className="parent__img" alt=""/>
            </div>

            <div className="parent__information">
              <div className="parent__header">
                <a className="leave-parent-button" href="@">
                  Leave
              </a>
              </div>
              <div className="parent__body">
                <div className="parent__text">
                  <p className="parent__greeting">{'Hello, ' + this.name + '!'}</p>
                  <button className="change-password-button" onClick={this.handleClickChangePassword}>Change password</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            {this.state.isChangePassword ?
              <div className="parent__footer">
                <form className="parent__form">
                  <label className="label-for-parent-password">New password
                        <input className="parent-password" type="password">
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
          <img className="child_user__avatar avatar_lily" alt=""/>
          <div>
            <div className="child-user__text childs-information">
              <p className="childs-information__name">Lily</p>
              <p className="childs-information__coins">95 HC</p>
            </div>
            <button className="change-HC-button">Change HC amount</button>
          </div>
        </div>
        <div className="child-user user_mary">
          <img className="child_user__avatar avatar_mary" alt=""/>
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
