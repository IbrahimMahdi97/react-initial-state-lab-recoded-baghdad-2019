// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {
  
  constructor(props) {
    super()
    
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  
  render() {
    const message = 
    return (
      <div>{message}</div>
      )
  }
}

export default Bomb;