import React, { Component } from 'react'

//This component takes a query typed into the search box and allows a search function through the GetNews components - sent as props
class Search extends Component {
  state = {
    query: ""
  }

//send the state to the GetNews component where the query can be used to Search
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
