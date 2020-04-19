import React from 'react';
import './App.css';
import TopToolBar from '../TopToolBar/TopToolBar';
import ProductToolBar from '../ProductToolBar/ProductToolBar';
import WorkArea from '../WorkArea/WorkArea';
import { DragDropContext } from 'react-beautiful-dnd';

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

  onDragEnd = (result) => {
    console.log(result);

  }

  onDragStart = start => {
    // store where the start originated:
    // if from the tool bar, then we will need to clone the object (since we want the original to stay put)
  }


  render() {
    return (
      <DragDropContext onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
        <div className="App">
          <TopToolBar title={this.state.title}/>
          <ProductToolBar title={this.state.title} onViewSelect={this.handleViewSelect}/>
          <WorkArea view={this.state.view}/>
        </div>
      </DragDropContext>
    );
  }
}

export default App;
