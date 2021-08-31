import React, {Component} from 'react';
import CardList from '../components/CardList.js'
import Scroll from '../components/Scroll.js'
import SearchBox from '../components/SearchBox'
import  './App.css'
import ErrorBaundry from '../components/ErrorBaundry.js'



class App extends Component{
    constructor(){
        super()
       this.state = {
        robots: [],
        seachfield: ''
       } 
    }

    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json() )
      .then(users => this.setState({ robots: users }))
    

    }

    onSearchChange = (event) =>{
    this.setState({seachfield : event.target.value })
     
     
    }

    render(){
      const { robots, seachfield } = this.state;
        const filteredRobots = robots.filter(robot =>{
       return robot.name.toLowerCase()
       .includes(seachfield.toLowerCase())
      
     }
     )
     return !robots.length ?
     <h1>Loading</h1> :
     ( <div className='tc'>
     <h1 className='f2'>Robo Friends</h1>
     <SearchBox searchChange={this.onSearchChange}/>
     
    <Scroll>
      <ErrorBaundry>
        < CardList robots={filteredRobots} />
       </ErrorBaundry>
    </Scroll>
   </div>
);
    
        
    }
   
}
export default App