// Write your code here
import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onIncrement = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="content">
          <div className="container">
            <h1 className="heading">Random Number</h1>
            <p>Generate a random number in the range of 0 to 100</p>
            <button type="button" className="button" onClick={this.onIncrement}>
              Generate
            </button>
            <p className="paragraph">{count}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
