import React, { PureComponent } from 'react'

export default class PureChildComponent extends PureComponent {
  render() {
    console.log("I have Changed")
    return (
      <div>
        <h3>{this.props.message}</h3>
      </div>
    )
  }
}
