import React from 'react';
import './App.css';
import  ReactPlayer  from 'react-player';
class App extends React.Component{
    constructor(props)
    {
      super(props);
      this.state = {
        inputValue: "",
        url: ""
      };
    }
    handleChange = (event) => {
      this.setState({ inputValue: event.target.value });
    };
    handleSubmit = (event) => {
      event.preventDefault();
      this.setState({ url: this.state.inputValue });
    };
    render(){
    return (
      <div className="App">
      <header className="App-header">
        <div>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} style={{margin:"20px"}} className="form-control p-4" type="text" placeholder="video url" />
            <button style={{ margin: "20px" }} className="btn btn-primary">Play</button>
          </form>
        </div>
        <ReactPlayer url={this.state.url} controls={true} />
      </header>
    </div>
    );
    }
  
}

export default App;
