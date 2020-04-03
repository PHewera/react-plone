import React, {Component} from 'react';


class LowerFooter extends Component {

  render() {
    return (
      <div id="lower-footer">
        <ul id="site-actions-wrapper">
          {typeof this.props.actions['site_actions'] !== "undefined" &&
           Object.entries(this.props.actions['site_actions']).map((item, idx) => (
             <li className="site-action" key={idx}>
               <a href={item[1]['id']}>{item[1]['title']}</a>
             </li>
           ))
          }
        </ul>
      </div>
    );
  }
}

export default LowerFooter;
