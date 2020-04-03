import React, {Component} from 'react';


class Topbar extends Component {

  render() {
    return (
      <div id="topbar">
        <div id="logo-wrapper">
          <a href={this.props.content['@id']}>
            <img src={this.props.content['@id']+'/logo.png'} id="portal-logo" alt="logo" />
          </a>
        </div>
      </div>
    );
  }
}

export default Topbar;