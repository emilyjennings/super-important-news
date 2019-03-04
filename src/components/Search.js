import React, { Component } from 'react'

class Search extends Component {
  state = {
    query: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchNews(this.state.query)
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
        </form>
      </div>
    )
  }


}

export default Search
