// Write your code here

import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {showFirstName: false, showLastName: false}

  onShowLastName = () => {
    this.setstate(prevState => ({showLastName: !prevState.showLastName}))
  }

  onShowFirstName = () => {
    this.setstate(prevstate => ({showFirstName: !prevstate.showFirstName}))
  }

  render() {
    const {showFirstName, showLastName} = this.state

    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="hide-card">
          <div className="name-container">
            <button
              className="button"
              type="button"
              onClick={this.onShowFirstName}
            >
              Show/Hide FirstName
            </button>
            {showFirstName && <p className="name">Joe</p>}
          </div>
          <div className="name-container">
            <button
              className="button"
              type="button"
              onClick={this.onShowLastName}
            >
              Show/Hide LastName
            </button>
            {showLastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
