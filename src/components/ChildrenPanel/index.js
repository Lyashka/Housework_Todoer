import React, { Component } from "react";
import LilyImg from '../../icons/Lily.svg';
import MaryImg from '../../icons/Mary.svg';
import './childrenPanel.scss';

export default class ChildrenPanel extends Component {
  constructor(props) {
    super(props);

    this.name = this.props.name;
  }

  render() {
    return (
      <>
        <div className="container-child">
          <div className="child">
            <div className="child__avatar">
              {this.name === 'Lily' ?
              <img className="child__img" src={LilyImg} alt="Lily"/> :
              <img className="child__img" src={MaryImg} alt="Lily"/>
              }
            </div>

            <div className="child__information">
              <div className="child__header">
                <a className="leave-child-button" href="@">
                  Leave
              </a>
              </div>
              <div className="child__body">
                <div className="child__text">
                  <p className="child__greeting">{'Hello, ' + this.name + '!'}</p>
                  <p className="child__reward">425 HC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
