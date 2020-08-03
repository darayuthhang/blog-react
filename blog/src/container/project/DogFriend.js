import React from 'react';


import DogList from '../../components/dogfriends-app/DogList.js';
import DropDown from '../../components/dogfriends-app/DropDown.js';

class DogFriend extends React.Component {
  constructor(){
    super()
    this.state = {
      "dogTypes": "",
      "dogs": []
    }
  }

  handleDropDown = (event) => {
    this.setState({
      dogTypes:event.target.value,
    })
  }


  componentDidMount(){
    let url;
    url = "https://dog.ceo/api/breed/husky/images"
    this.getApi(url);
  }

  getApi = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => { this.setState({ dogs: data }) });
  }



  render() {
    if(this.state.dogTypes !== ""){
      let { dogTypes } = this.state;
      const url = `https://dog.ceo/api/breed/${dogTypes}/images`;
      this.getApi(url);
    }
  

    if(this.state.dogs.length === 0){
      return <h1>Loading</h1>
    }else{
      return (
        <div className="tc">
          <div className="dogfriend-bg">
            <DropDown dropDownBox={this.handleDropDown} />
            <DogList dogs={this.state.dogs} />
          </div>
        </div>
      );
    }
  }
}
 

export default DogFriend;
