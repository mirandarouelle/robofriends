import React, {Component} from 'react';
//import { robots } from '../robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import { setSearchField, requestRobots } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
      searchField: state.searchRobots.searchField,
      robots: state.requestRobots.robots,
      isPending: state.requestRobots.isPending,
      error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component{
  //removed below due to redux change
  // constructor(){
  //   super();
  //   this.state = {
  //
  //     // robots: [],
  //     // searchField: ''
  //   }
  //   //console.log('Constructor');
  // }

  componentDidMount(){
    this.props.onRequestRobots();
  }
  // Removed due to react-redux/thunk
  // componentDidMount(){
  //     fetch('https://jsonplaceholder.typicode.com/users')
  //       .then(response => response.json())
  //       .then(users => this.setState({robots: users}));
  //
  //     //this.setState({robots: robots});
  //     //console.log('componentDidMount');
  // }

  // Removed due to react-redux
  // onSearchChange = (event) => {
  //   this.setState({searchField: event.target.value})
  // }


  render(){
    // const { robots } = this.state;
    const {searchField, onSearchChange, robots, isPending} = this.props;
    const filteredRobots = robots.filter(robot =>  {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    //console.log('render');
    return isPending ?
      (<h1>Loading</h1>) :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots}/>
            </ErrorBoundary>
          </Scroll>
        </div>
      )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
