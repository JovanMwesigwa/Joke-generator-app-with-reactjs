import React from 'react'
import './Joke.css';

const Joke = (props) => {

  return (
    <div className='app'>
        <div className="card">
          <h1 className="heading">Joke of the day</h1>
          <div className="text-container">
              <h3>{props.joke}</h3>
              {props.punchline ? <h4>{props.punchline}</h4> : "Not available"}
          </div>       
        

          <button className='button'  onClick={props.onClickHander}>
                <span>GET JOKE</span>
          </button>
          </div>
    </div>
      

  )
}

export default Joke
