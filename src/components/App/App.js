import React from 'react';
import './App.css';
import TopToolBar from '../TopToolBar/TopToolBar';
import ProductToolBar from '../ProductToolBar/ProductToolBar';
import WorkArea from '../WorkArea/WorkArea';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: 'Candidate homework',
      view: 'roadmap',
    };

    this.handleViewSelect = this.handleViewSelect.bind(this);
  }

  handleViewSelect = (view) => {
    this.setState({view: view});
    console.log(view);
  }


  render() {
    return (

        <div className="App">
          <TopToolBar title={this.state.title}/>
          <div className="test1 bottom">
            <div className="test-bottom-right">
              poop
            </div>

              <div className="test-bottom-left">
                Bottom Left
              </div>

            <div className="test-right">
              <h3 className="test-bottom">
                bottom2
              </h3>
            </div>
          </div>
          <ProductToolBar title={this.state.title} onViewSelect={this.handleViewSelect}/>
          <WorkArea view={this.state.view}/>
        </div>

    );
  }
}

export default App;
