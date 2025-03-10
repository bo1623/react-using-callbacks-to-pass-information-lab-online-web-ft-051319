import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div
      key={idx}
      className="color-swatch"
      style={{backgroundColor: str}}
      onClick={this.handleClick}
      />
    })
  )

  handleClick = (e) => {
    let col = e.target.style.backgroundColor
    console.log(col)
    console.log('handleClick works')
    this.props.changeColor(col)
  }

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
