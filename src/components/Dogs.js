import React, {Component} from 'react';
import axios from 'axios';

import "../App.css"


const STATUS = {
  LOADING: "⚡️LOADING⚡️",
  LOADED: "LOADED",
  ERROR: "❌ERROR❌",
};

class Dogs extends Component {

  state = {
    status: STATUS.LOADING,
    dogs: undefined,
    numImages: 0,
  }

  componentDidMount() {
    axios
    .get("https://dog.ceo/api/breeds/list")
    .then((response) => {
      console.log("DOGS:", response.data)
      this.setState({
        dogs: response.data.message,
        status: STATUS.LOADED
      })
    }).catch((error) => {
      console.log(error)
      this.setState({
        status: STATUS.ERROR,
      })
    }
    )
  }

  renderDogs = () => {
    const { dogs } = this.state;
    return dogs.map((dog, index) => {
      return <p className="dog-name" key={ `${dog}_${index}` }>{ dog }</p>
    })
  }

  countDogsImage = () => {
    const { dogs, numImages } =this.state;
    let counter = 0;
    // eslint-disable-next-line array-callback-return
    return dogs.map((dog, index) => {
      axios
      .get(`https://dog.ceo/api/breed/${dog}/images`)
      .then ((response) => {
        console.log("NUM:", response.data.message.length)
        counter += response.data.message.length;
        console.log("COUNTER:", counter)
        this.setState({
          ...this.state,
          numImages: counter,
        })
        return console.log("TOTAL:", counter, "STATE:", numImages)
      })
      
      
    })
  }

  render() {
    const { status } = this.state;

    // eslint-disable-next-line default-case
    switch (status) {
      case STATUS.LOADING:
        return <div>{ status }</div>;
      case STATUS.LOADED:
        return  <div className="dogs-box">
                  { this.renderDogs() }
                  <button onClick={ this.countDogsImage }> Count Dogs Image</button>
                </div>
      case STATUS.ERROR:
        return <div>{ status }</div>;
    }

  }
}

export default Dogs;