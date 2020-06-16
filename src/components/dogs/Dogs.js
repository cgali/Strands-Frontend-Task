import React, {Component} from 'react';
import axios from 'axios';
import {Pie} from 'react-chartjs-2';

import "./dogs.css"


const STATUS = {
  LOADING: "⚡️LOADING⚡️",
  LOADED: "LOADED",
  ERROR: "❌ERROR❌",
};
let dogsName = [];
let ImageQuantity = [];
let str = [];

const data = {
	labels: dogsName,
	datasets: [{
		data: ImageQuantity,
		backgroundColor: str,
		hoverBackgroundColor: "#c9ff08",
  }]
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
      this.generate()
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
      return (
        <div key={`${dog}_${index}`} className="dog-name-box">
          <p className="index-num">{ index + 1 }</p>
          <p className="dog-name" >{ dog }</p>
        </div>
      )
    })
  }

  countDogsImage = () => {
    const { dogs } =this.state;
    let counter = 0;
    // eslint-disable-next-line array-callback-return
    return dogs.map((dog, index) => {
      dogsName.push(dog)
      axios
      .get(`https://dog.ceo/api/breed/${dog}/images`)
      .then ((response) => {
        console.log("NAME:", dog)
        console.log("NUM:", response.data.message.length)
        ImageQuantity.push(response.data.message.length)
        counter += response.data.message.length;
        this.setState({
          ...this.state,
          numImages: counter,
        })
        console.log("TOTAL:", counter)
      })
    })
  }

  generate = () => {
    let r = 0;
    let g = 0;
    let b = 0;
    for (let i=0;i<94;i++)
    {
      r+=3;
      g+=2;
      b+=20;
      str.push(`rgb(${r}, ${g}, ${b})`);
    }
    console.log("COLORS:", str);
  }

  render() {
    const { status, numImages } = this.state;

    // eslint-disable-next-line default-case
    switch (status) {
      case STATUS.LOADING:
        return <div>{ status }</div>;
      case STATUS.LOADED:
        return  (
          <>
            <div className="dogs-box">
              { this.renderDogs() }
            </div>
            <div className="counter-box">
              <button className="button-count-images" onClick={ this.countDogsImage }>Count Dogs Image</button>
              <p>Total of images:</p>
              <h2 className="total-number">{ numImages }</h2>
            </div>
            <h2 className="chart-title">Pie chart about images quantity</h2>
            <Pie className="pie-chart" data={data} />
          </>
        )
      case STATUS.ERROR:
        return <div>{ status }</div>;
    }
  }
}

export default Dogs;