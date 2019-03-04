import React, { Component } from 'react'

<<<<<<< HEAD
class Search extends Component {

=======
//This component takes a query typed into the search box and allows a search function through the GetNews components - sent as props
class Search extends Component {
>>>>>>> second-try
  state = {
    query: ""
  }

<<<<<<< HEAD
=======
//send the state to the GetNews component where the query can be used to Search
>>>>>>> second-try
  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchNews(this.state.query)
  }

<<<<<<< HEAD
=======

>>>>>>> second-try
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
        </form>
      </div>
    )
  }

<<<<<<< HEAD
=======

>>>>>>> second-try
}

export default Search
