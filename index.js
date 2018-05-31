import React from 'react'
import VanillaTilt from 'vanilla-tilt'

class Tilt extends React.Component {
  constructor(props) {
    super(props)
    this.tiltRef = React.createRef()
  }

  componentDidMount() {
    VanillaTilt.init(this.tiltRef.current, this.props.options)
  }

  render() {
    return <div ref={this.tiltRef} {...this.props} />
  }
}

export default Tilt
