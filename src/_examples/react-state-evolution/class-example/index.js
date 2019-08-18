import React from 'react'
import ReactDOM from 'react-dom'

import { Button } from 'capybara-react-ui'

class ClassExample extends React.Component {
   
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
  }
 
  increment = () => this.setState(({ counter }) => ({ counter: counter + 1 }))
  
  render() {
    return (
      <div>
        <Button onClick={this.increment}>Increment</Button>
        <p>Counter: {this.state.counter}</p>
      </div>
    )
  }
  
}

ReactDOM.render(<ClassExample />, document.getElementById('root'));