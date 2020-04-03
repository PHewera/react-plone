import React, {Component} from 'react';


class Content extends Component {

  render() {
    return (
      <div id='portal-content'>
        <h1>{this.props.content.title}</h1>
        <h3>{this.props.content.description}</h3>
        <div id='content-core' dangerouslySetInnerHTML={{__html: this.props.content.text && this.props.content.text.data}} />
      </div>
    );
  }
}

export default Content;
