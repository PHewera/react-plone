import React, {Component} from 'react';


class Content extends Component {

  render() {
    return (
      <div id='portal-content'>
        <h1>Dummy Content</h1>
        <span>{this.props.content['@id']}</span>
      </div>
    );
  }
}

export default Content;