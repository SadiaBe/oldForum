import React from 'react'

class Search extends React.Component {


    
  handleChange = (e) => {
    this.props.handleInput(e.target.value)
//this function is taking in the text the user typed and is sending 
//back up the value using the function the parent sent down as a prop
  }

  render(){
    return (
      <div class="ui search">
        <div className="ui icon input">
            <br/>
            <h2> Search For a Post </h2>
            <br/>

          <input className="prompt" value={this.props.searchTerm} onChange={this.handleChange} />
          <i className="search icon" />
        </div>
      </div>
    )
  }

}

export default Search