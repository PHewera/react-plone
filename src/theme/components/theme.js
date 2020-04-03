import React, {Component} from 'react';
import '../style/content.css';
import '../style/index.css'
import '../style/header.css'
import '../style/footer.css'
import ploneAPI from "../../plone-api";
import Topbar from "./child_components/topbar";
import Navigation from "./child_components/navigation";
import UpperFooter from "./child_components/upper_footer";
import LowerFooter from "./child_components/lower_footer";
import Content from "./child_components/content";


const apiBase = ploneAPI.adress + ':' + ploneAPI.port + '/' + ploneAPI.id;

class Theme extends Component {

  constructor(props) {
    super(props);

    this.state = {
      apiData: {
        content: [],
        navigation: [],
        actions: []
      },
      apiURLS: {
        content: apiBase,
        navigation: apiBase + '/@navigation',
        actions: apiBase + '/@actions'
      }
    };

    this.fetchApiData = this.fetchApiData.bind(this)
  }

  fetchApiData(url, state){
    fetch(url, {
      method: 'get',
      headers: {
        Accept: 'application/json'
      },
    })
      .then(res => res.json())
      .then((data) => {
        this.setState({apiData: {...this.state.apiData, [state]: data}});
      })
      .catch(console.log);
  }

  componentDidMount() {
    this.fetchApiData(this.state.apiURLS.content, 'content');
    this.fetchApiData(this.state.apiURLS.navigation, 'navigation');
    this.fetchApiData(this.state.apiURLS.actions, 'actions')
  }

  render() {
    return (
      <div className='container'>
        <header id="header-container">
          <div id="portal-header">
            <Topbar content={this.state.apiData.content} />
            <Navigation navigation={this.state.apiData.navigation} />
          </div>
        </header>
        <div id="main-container">
          <Content content={this.state.apiData.content}/>
        </div>
        <footer id="footer-container">
          <div id="portal-footer">
            <UpperFooter />
            <LowerFooter actions={this.state.apiData.actions}/>
          </div>
        </footer>
      </div>
    );
  }
}

export default Theme;