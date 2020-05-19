import React, { Component } from 'react'
import axios from 'axios';
import './Jokes.css';
import Joke from '../Quote/Joke';


class Jokes extends Component {

    state = {
        joke: '',
        punchline: ''
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = () =>{
        axios.get('https://sv443.net/jokeapi/v2/joke/Any')
            .then(response => {
                const {setup, delivery} = response.data
                this.setState({joke: setup, punchline:delivery})
                // console.log(response.data.setup);
                // console.log(response.data.delivery);
            })
            .catch(error => {
                console.log(error);
            })
    }
  render() {
    return ( 
        
        <Joke joke={this.state.joke}  punchline={this.state.punchline} onClickHander={this.fetchData}/>
   
        
        
    )
  }
}

export default Jokes
