import React, {Component} from 'react'
import ploneAPI from "../../../plone-api";

class LowerFooter extends Component {

  state = {
    actions: []
  };

  api = ploneAPI.adress + ':' + ploneAPI.port + '/' + ploneAPI.id;

  componentDidMount() {
    fetch(this.api + '/@actions', {
      method: 'get',
      headers: {
        Accept: 'application/json'
      },
    })
      .then(res => res.json())
      .then((data) => {
        this.setState({ actions: data});
      })
      .catch(console.log)
  }

  render() {
    return (
      <div id="lower-footer">
        <ul id="site-actions-wrapper">
          {typeof this.state.actions['site_actions'] !== "undefined" &&
           Object.entries(this.state.actions['site_actions']).map((item, idx) => (
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
