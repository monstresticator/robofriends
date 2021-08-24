import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
// import { robots } from './robots';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
		   robots: [],
           searchfield: ''	
		}
	}

    componentDidMount() {
    	fetch('https://jsonplaceholder.typicode.com/users')
    	   .then(response => response.json())
    	   .then(users =>{console.log(users); return this.setState({ robots: users })});
    }

    // anytime you make your own methods, use arrow functions
    onSearchChange = (event) => {
    	this.setState({ searchfield: event.target.value })	
    }

	render() {
	   const { robots, searchfield } = this.state;
	   const foundRobots = robots.filter(robot => {
    		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
       })

       return !robots.length ?
       	 <h1>Please wait ...</h1> :
	     (
	       <div className='tc'>
              <h1 className='f1'>RoboFriends</h1>
              <SearchBox searchChange={ this.onSearchChange }/>
              <Scroll>
                 <CardList robots={ foundRobots } />
              </Scroll>
           </div>
         );
    }
}

export default App;