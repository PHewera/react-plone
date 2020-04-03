import React, {Component} from 'react'


class Navigation extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
//    Content.setState({api: e.target.href});
  };

  render() {
    return (
      <div id="navigation">
        <ul id="navigation-wrapper">
          {typeof this.props.navigation.items !== "undefined" &&
           Object.entries(this.props.navigation.items).map((item, idx) => (
             <li className="nav-element" key={idx}>
               <a href={item[1]['@id']} onClick={this.handleClick}>{item[1].title}</a>
             </li>
           ))
          }
        </ul>
      </div>
    );
  }
}

export default Navigation;
