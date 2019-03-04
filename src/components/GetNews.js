import React, { Component } from 'react'
import ReactSVG from 'react-svg'
import $ from 'jquery'
import comment from './comment.svg';

import Search from './Search'

//This component includes what I would later like to refactor into being a card component - would need more time for this.


class GetNews extends Component {

  state = {
    items: []
  }

//I rendered the search component here and then iterated through the items (news items) that were returned into an array in the state via the API call
  render() {
    return(
      <div>
<<<<<<< HEAD

        <h1>News:</h1>
=======
        <Search fetchNews={this.fetchNews} />

>>>>>>> second-try
        {this.state.items.map(item =>
          <a href={item.url}>
          <div className="cardborder">
            <div className="leftbox">
              <div className="itemtitle">{item.title}</div>
              <div className="url">{item.domain}</div>
              <div className="points">{item.points} Points</div>
              <div className="user_time">by <span className="user">{item.user}</span> <span idName="time_ago">{item.time_ago}</span></div>
            </div>
            <div className="commentbox">
              <a href={"https://news.ycombinator.com/item?id=" + item.id}>
              <img src={comment} className="commentimg" alt="comment" />
              <div className="comments">{item.comments_count}</div>
              </a>
            </div>
          </div>
          </a>
        )}

      </div>
    )
  }



  //I worked on the search item last - decided to make an if statement that checks if the form target value exists yet to then narrow the search. That didn't quite woerk so i am thinking of orther options or having a toggle in the components that render something depending on the query.
  //I will continue to work on it after this assignment is turned in. This needs to work!
  fetchNews = (query = "") => {

      $.ajax({
          url: `https://node-hnapi.herokuapp.com/news`
        }).then(json => {
          this.setState({ items: json.map( item => item ) })
        })

        //I would figure out a way to search this API with more time, but I noticed other API sources of Hacker News have more searchable options. This particular one doesn't have a lot of options in the documentaiton for searching. I'd have to maybe look at the content of each item in the results dfrom the API to see if the title, for instance, includes the query from the search.

    }

//The function to call the API is called whewn the component mounts
  componentDidMount() {
      this.fetchNews()


  }

}

export default GetNews
