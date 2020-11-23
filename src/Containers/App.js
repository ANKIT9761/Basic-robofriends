import React ,{Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';
import './App.css';
class App extends Component{
  constructor(){
    super();
    this.state = {
      robots: [],
      searchfield:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>{
      this.setState({robots:users})
    });

  }
  onSearchChange=(event)=>{
    this.setState({searchfield:event.target.value});

  }
  render(){
    const {robots,searchfield}=this.state;
    const filteredRobots=robots.filter(robots=>{
      return robots.name.toLowerCase().includes(searchfield.toLowerCase())
      })
  return (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>

        <SearchBox SearchChange={this.onSearchChange}/>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots}/>
          </ErrorBoundary>

      </Scroll>


  </div>
  );
}
}

export default App;
