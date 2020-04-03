import React, {Component} from 'react'
import ploneAPI from "../../../plone-api";

class Navigation extends Component {

  state = {
    navigation: []
  };

  api = ploneAPI.adress + ':' + ploneAPI.port + '/' + ploneAPI.id;

  componentDidMount() {
    fetch(this.api + '/@navigation', {
      method: 'get',
      headers: {
        Accept: 'application/json'
      },
    })
      .then(res => res.json())
      .then((data) => {
        this.setState({ navigation: data});
      })
      .catch(console.log)
  }

  render() {
    return (
      <div id="navigation">
        <ul id="navigation-wrapper">
          {typeof this.state.navigation.items !== "undefined" &&
           Object.entries(this.state.navigation.items).map((item, idx) => (
             <li className="nav-element" key={idx}>
               <a href={item[1]['@id']}>{item[1].title}</a>
             </li>
           ))
          }
        </ul>
      </div>
    );
  }
}

export default Navigation;
