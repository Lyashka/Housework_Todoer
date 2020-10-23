import React, { Component } from "react";
import LilyImg from '../../icons/Lily.svg';
import MaryImg from '../../icons/Mary.svg';
import './childrenPanel.scss';

export default class ChildrenPanel extends Component {
  constructor(props) {
    super(props);

    this.name = this.props.name;
    this.coinsSum = this.props.coinsSum;
  }

  render() {
    console.log(this.coinsSum)
    const pathByName = this.name === 'Lily' ? LilyImg : MaryImg;

    return (
      <>
        <div className="container-child">
          <div className="child">
            <div className="child__avatar">
              <img className="child__img" src={pathByName} alt={this.name}/>
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
                  <p className="child__reward">{this.coinsSum} HC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
