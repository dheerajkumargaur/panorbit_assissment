import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./style.scss"

export default class Sidebar extends Component {
  state = {
    menuItems: [
      { id: 0, name: 'Profile', route: 'profile' },
      { id: 1, name: 'Posts', route: 'posts' },
      { id: 2, name: 'Gallery', route: 'gallery' },
      { id: 3, name: 'ToDo', route: 'todo' }
    ]
  };

  componentDidMount() {}

  render() {
    const pageR = window.location.href.split('/').pop();

    return (
      <div className="sidebarContainer">
        {this.state.menuItems.map(item => (
          <Link
            to={this.props.matchUrl + '/' + item.route}
            className={'sidebarItem ' + (pageR === item.route ? 'active' : '')}
            key={item.id}
          >
            <span className="itemTitle">{item.name}</span>
            {pageR === item.route ? (
              <span className="activeIcon"> * </span>
            ) : null}
          </Link>
        ))}
      </div>
    );
  }
}
