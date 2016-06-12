import React, { Component, PropTypes } from 'react'

import '../../scss/index.scss'

export class App extends Component {
  render () {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

App.displayName = 'App'

App.propTypes = {
  children: PropTypes.node
}
