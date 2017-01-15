import React, { Component } from 'react';

// declare component using function
//const SearchBar = () => {
//  return <input />;   // React.createElement
//};

// declare component using class based component
class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          id="demo"
          className="form-control"
          value={this.state.term}
          onChange = { this.onInputChange }
          />
      </div>
    );
  }

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
    this.props.onSearchTermChange(this.state.term);
  }
}

export default SearchBar;
