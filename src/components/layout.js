import React, { Component } from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import "../css/layout.css"
import "../css/main.css"

export default class layout extends Component {
  render() {
    const { children } = this.props
    return <div>{children}</div>
  }
}
