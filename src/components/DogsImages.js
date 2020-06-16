import React, {Component} from 'react';
import axios from 'axios';


class DogsImages extends Component {

  state = {
    dogsImages: undefined,
  }

  componentDidMount() {
    axios
    .get("https://dog.ceo/api/breed/hound/images")
    .then((response) => {
      console.log("IMAGES:", response.data.message)
      this.setState({
        dogsImages: response.data,
      })
    })
    
  }


  render() {
    return(
      <div>

      </div>
    )
  }
}

export default DogsImages;