import React, {Component}  from 'react';
import '../style/header.css';
import Navigation from "./sub_components/navigation";
import Topbar from "./sub_components/topbar";
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
        <Topbar apiData={this.state.apiData} />
        <Navigation navigation={this.state.apiData.items} />
      </div>
    );
  }
}


export default Header;
