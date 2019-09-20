import React from 'react';
import MainPage from '../components/MainPage';


class App extends React.Component {
  render() {
    return <MainPage { ...this.props } />
  }
}

export default App;
