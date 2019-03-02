import React, { Component } from 'react'
import NewsCard from 'components/NewsCard'
import Search from 'components/Search'

class NewsSearchContainer extends Component {

  state = {
    gifs: []
  }

  render() {
    return(
      <div>
      </div>
    )
  }

  fetchNews = (query = "") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(res => res.json())
      .then(({data}) => {
        this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
      })
  }

  componentDidMount() {
    this.fetchNews()
  }
}

export default NewsSearchContainer
