import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value })
  }

  onFormSubmit = event => {
    event.preventDefault(); //on submit doesn't reload the page 

    //TODO: Make sure we call 
    //Call back from parent component 
    this.props.submitForm(this.state.term)
  }

  // 1. we type in this form and that gets stored in state term 
  // 2. then we press enter which submits the form
  // 3. when we submit the form onFormSumit gets called which calls the parent class (App)'s onTermSubmit (calls YouTube API)
  // ^ How is it able to do step 3? Because parent passed onTermSubmit to SearchBar via prop called submitForm

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form"> 
          <div className="field">
            <label>Video Search</label>
            <input 
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
             />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar