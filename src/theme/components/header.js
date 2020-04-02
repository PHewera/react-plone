import React, {Component}  from 'react';
import logo from '../images/logo.svg';
import '../style/header.css';
import Navigation from "./sub_components/navigation";
import ploneAPI from '../../plone-api'

class Header extends Component {

  state = {
    apiData: []
  };

  api = ploneAPI.adress + ':' + ploneAPI.port + '/' + ploneAPI.id;

  componentDidMount() {
    fetch(this.api, {
      method: 'get',
      headers: {
        Accept: 'application/json'
      },
    })
    .then(res => res.json())
    .then((data) => {
      this.setState({ apiData: data});
    })
    .catch(console.log)
  }

  render() {
    return (
      <div id="portal-header">
        <div id="topbar">
          <div id="logo-wrapper">
            <a href={this.state.apiData['@id']}>
              <img src={this.state.apiData['@id']+'/logo.png'} id="portal-logo" alt="logo" />
            </a>
          </div>
        </div>
        <Navigation navigation={this.state.apiData.items} />
      </div>
    );
  }
}


export default Header;
