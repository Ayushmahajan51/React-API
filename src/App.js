import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  //Lifecycle method to extract data from API
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => {
        //updating state
        this.setState({
          isLoaded: true, //loading data is done
          items: json //array updated
        });
      });
  }
  //render is for producing output
  render() {
    //to access properties inside the state
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <ul>
            {items.map(item => (
              <li key={item.id}>Name:{item.name}</li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default App;
