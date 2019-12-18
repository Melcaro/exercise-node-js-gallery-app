import React from 'react';
import './App.css';

import { Gallery } from './Gallery';

import { getContentOfDirectory } from './../services/fetchData';

class App extends React.Component {
  state = {
    directoryContent: null,
  };

  sendQuery = async () => {
    const { data } = await getContentOfDirectory();
    this.setState({ directoryContent: data });
  };
  render() {
    const { directoryContent } = this.state;
    console.log(directoryContent);
    return (
      <div className="App">
        <h1>Gallery App with Node</h1>
        <button onClick={this.sendQuery}>Get directory's content</button>
        {directoryContent && <Gallery directoryContent={directoryContent} />}
      </div>
    );
  }
}

export default App;
