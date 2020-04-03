import React, {Component} from 'react';


class Navigation extends Component {

  render() {
    return (
      <div id="navigation">
        <ul id="navigation-wrapper">
          {typeof this.props.navigation.items !== "undefined" &&
           Object.entries(this.props.navigation.items).map((item, idx) => (
             <li className="nav-element" key={idx}>
               <a href={item[1]['@id']} onClick={(e) => this.props.action(e, item[1]['@id'])}>{item[1].title}</a>
             </li>
           ))
          }
        </ul>
      </div>
    );
  }
}

export default Navigation;
