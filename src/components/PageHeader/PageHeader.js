import React, { Component } from "react";
import "./style.scss";

export default class PageHeader extends Component {
  componentDidMount() {}

  render() {
    const { userData } = this.props;

    return (
      <div className="pageHeaderContainer">
        <div>Page Name</div>
        <button className="userProfile">
          <div className="itemImg ">
            <img src={userData.profilepicture} alt="profile-pic" />
          </div>
          <span>{userData.name}</span>
        </button>
      </div>
    );
  }z
}
