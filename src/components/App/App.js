import React from 'react';
import './App.css';
import TopToolBar from '../TopToolBar/TopToolBar';
import Workspace from '../Workspace/Workspace'
import TimeLine22 from '../TimeLine22/TimeLine22';
import Onboarding from '../Onboarding/Onboarding';
import onboardingContent from '../../onboarding-content';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: 'Candidate homework',
      view: 'roadmap',
      showOnboarding: false,
    };

    this.handleViewSelect = this.handleViewSelect.bind(this);
    this.closeOnboarding = this.closeOnboarding.bind(this);
  }

  handleViewSelect = (view) => {
    this.setState({view: view});
    console.log(view);
  }

  onboardingButtonEvent = (e) => {
    this.setState({showOnboarding: true});

  }

  closeOnboarding = () => {
    this.setState({showOnboarding: false});
  }

  componentDidMount() {

    const target = document.getElementsByClassName('tool_area');
    console.log(target);
    if (target) {
      let rect = target[0].getBoundingClientRect();
      console.log(rect);
    }
  }

  render() {
    return (

        <div className="App">
          <TopToolBar title={this.state.title}/>
          <TimeLine22 />
          <div className="test1 bottom">
            <div className="test-bottom-right">
              poop
            </div>
<button onClick = {this.onboardingButtonEvent}> Show Onboarding</button>
              <div className="test-bottom-left">
                Bottom Left
              </div>

            <div className="test-right">
              <h3 className="test-bottom">
                bottom2
              </h3>
            </div>
          </div>
          <Workspace view={this.state.view}/>
          <Onboarding 
            show={this.state.showOnboarding} 
            onClose={this.closeOnboarding} 
            content={onboardingContent.addLane}
          />
   
        </div>

    );
  }
}

export default App;
