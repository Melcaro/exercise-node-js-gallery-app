import React from 'react';
import './App.css';

import { Gallery } from './Gallery';

import { getContentOfDirectory } from './../services/fetchData';

class App extends React.Component {
  state = {
    directoryContent: null,
  };

  componentDidMount() {
    this.sendQuery('images');
  }
  sendQuery = async path => {
    const { data } = await getContentOfDirectory(path);
    this.setState({ directoryContent: data });
  };
  render() {
    const { directoryContent } = this.state;
    console.log(directoryContent);
    return (
      <div className="App">
        <h1>Gallery App with Node</h1>

        {directoryContent && <Gallery directoryContent={directoryContent} />}
      </div>
    );
  }
}

export default App;
