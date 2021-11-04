import { Component } from "react";
import SearchBox from '../components/searchBox'
import CardList from '../components/cardList'

class MainPage extends Component {
  constructor(props) {
    super();
    this.state = {
      searchField: ''
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  filteredRobots = () => {
    return this.props.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
  }

  render() {
    return (
      <div className="tc">
        <h1 className="f1">Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange}></SearchBox>
        <CardList robots={this.filteredRobots()}></CardList>
      </div>
    )
  }
}

export default MainPage;