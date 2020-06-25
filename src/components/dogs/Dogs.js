import React, {Component} from 'react';
import axios from 'axios';
import {Pie} from 'react-chartjs-2';

import "./dogs.css"


let dogsName = [];
let ImageQuantity = [];
let str = [];

const STATUS = {
  LOADING: "⚡️LOADING⚡️",
  LOADED: "LOADED",
  ERROR: "❌ERROR❌",
};

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
    numImages: null,
  }

  componentDidMount() {
    this.nameOfDogsBreed()
  }

  nameOfDogsBreed = () => {
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
      })
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
          ImageQuantity.push(response.data.message.length)
          counter += response.data.message.length;
          this.setState({
            ...this.state,
            numImages: counter,
          })
        })
        this.generateColors(90, 50, 30, 14, 31, 10, 10)
        this.generateColors(40, 10, 70, 20, 21, 10, 10)
        this.generateColors(10, 40, 30, 20, 11, 20, 10)
        this.generateColors(7, 116, 225, 20, 10, 10, 10)
        this.generateColors(255, 7, 30, 20, 3, 10, 1)
    })
  }

  generateColors = (red, green, blue, qty, redNum, greenNum, blueNum) => {
    let r = red;
    let g = green;
    let b = blue;
    for (let i=0;i<qty;i++)
    {
      r+=redNum;
      g+=greenNum;
      b+=blueNum;
      str.push(`rgb(${r}, ${g}, ${b})`);
    }
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
          <h2 className="list-title">List of all dogs breed</h2>
            <div className="dogs-box">
              { this.renderDogs() }
            </div>
            <div className="counter-box">
              { !numImages && ( <button className="button-count-images" onClick={ this.countDogsImage }>Calculate!</button> )}
              
              <p>Total of images:</p>
              <h2 className="total-number">{ numImages ? numImages : 0 }</h2>
            </div>
            
            { numImages && ( 
              <>
              <h2 className="chart-title">Pie chart about images quantity</h2>
              <Pie className="pie-chart" data={data}/>
              </>
            )} 
          </>
        )
      case STATUS.ERROR:
        return <div>{ status }</div>;
    }
  }
}

export default Dogs;