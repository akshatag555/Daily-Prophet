//import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import { Route,Routes,BrowserRouter as Router } from 'react-router-dom';
export default class App extends Component {
  state = {
    progress:10
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
          <div>
        <Router>
        <LoadingBar
        height={5}
        color='#f11946'
       progress={this.state.progress}
        //onLoaderFinished={() => setProgress(0)}
      />
          <Navbar />
          <Routes>
            <Route path='/' element={<News  setProgress={this.setProgress} key='general' pageSize={12} country='us' category='general' />}></Route>
            <Route path='/business' element={<News  setProgress={this.setProgress}key='business' pageSize={12} country='us' category='business' />}></Route>
            <Route path='/entertainment' element={<News setProgress={this.setProgress} key='entertainment' pageSize={12} country='us' category='entertainment' />}></Route>
            <Route path='/health' element={<News setProgress={this.setProgress} key='health' pageSize={12} country='us' category='health' />}></Route>
            <Route path='/science' element={<News setProgress={this.setProgress} key='science' pageSize={12} country='us' category='science' />}></Route>
            <Route path='/sports' element={<News setProgress={this.setProgress} key='sports' pageSize={12} country='us' category='sports' />}></Route>
            <Route path='/technology' element={<News setProgress={this.setProgress} key='technology' pageSize={12} country='us' category='technology' />}></Route>
          </Routes>
        </Router>
      </div>
      </div>
    )
  }
}

