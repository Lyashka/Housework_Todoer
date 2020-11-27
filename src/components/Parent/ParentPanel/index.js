import React, { Component } from "react";
import styled from "styled-components";

const ContainerParent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

const Parent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 220px;
  height: 110px;
  padding: 10px;
  background-color: #FFE8DB;
  border-radius: 8px;
`;

const ParentAvatar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ParentImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

const ParentInformation = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 120px;
`;

const ParentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const LeaveParentButton = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 20px;
  font-size: 0.7em;
  color: #555555;
  /* background-image: url(${imgExit}); */
  background-size: 20%;
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: center;

  &:hover {
    color: #000000;
    /* background-image: url(${imgExitHover}); */
  }

  &:active {
    color: #FF8933;
    /* background-image: url(${imgExitActive}); */
  }
`;

const ParentBody = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ParentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const ParentGreeting = styled.p`
  color: #555555;
  margin-bottom: 10px;
`;

const ChangePasswordButton = styled.button`
  color: #FF8933;
  font-size: 0.8em;

  &:hover {
    color: #F95D66;
  }

  &:active {
    background-color: #F95D66;
    color: #FFFFFF;
    border-radius: 2px;
  }
`;

const ParentFooter = styled.div`
  display: flex;
  flex-direction: column;
`;

const ParentForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const ParentLabel = styled.label`
  font-size: 0.85em;
`;

const ButtonsChangePassword = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-size: 0.9em;
`;

const ParentPassword = styled.input`
  border: 1px solid #555555;
  width: 100%;
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 10px;
`;

const RejectChangePasswordButton = styled.button`
  margin-right: 10px;
  padding: 5px;
  border: 1px solid #F95D66;
  color:#F95D66;

  &:hover {
    box-shadow: 0px 10px 12px -6px #F95D66;
  }

  &:active {
    background-color: #F95D66;
    color: #FFFFFF;
  }
`;

const AcceptChangePasswordButton = styled.button`
  padding: 5px;
  color: #FFFFFF;
  background-color: #FF8933;

  &:hover {
    box-shadow: 0px 10px 12px -6px #FF8933;
  }

  &:active {
    background-color: #FFFFFF;
    color: #FF8933;
    border: 1px solid #FF8933;
  }
`;

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
    //TO DO: create when will add auth
  }

  render() {
    return (
      <>
        <ContainerParent>
          <Parent>
            <ParentAvatar>
              <ParentImg />
            </ParentAvatar>

            <ParentInformation>
              <ParentHeader>
                <LeaveParentButton href="@">
                  Leave
                </LeaveParentButton>
              </ParentHeader>
              <ParentBody>
                <ParentText>
                  <ParentGreeting>
                    {'Hello, ' + this.name + '!'}
                  </ParentGreeting>
                  <ChangePasswordButton onClick={this.handleClickChangePassword}>
                    Change password
                  </ChangePasswordButton>
                </ParentText>
              </ParentBody>
            </ParentInformation>
          </Parent>
           <div>
             {this.state.isChangePassword &&
              <ParentFooter>
                <ParentForm>
                  <ParentLabel>New password
                      <ParentPassword type="password" />
                  </ParentLabel>
                  <ButtonsChangePassword>
                    <RejectChangePasswordButton type="button" onClick={this.handleRejectChangePassword}>
                      Cancel
                    </RejectChangePasswordButton>
                    <AcceptChangePasswordButton type="submit">
                      Save
                    </AcceptChangePasswordButton>
                  </ButtonsChangePassword>
                </ParentForm>
              </ParentFooter>
              }
          </div>
        </ContainerParent>

        {/* <div className="child-user user_lily">
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
        </div> */}
      </>
    );
  }
}
