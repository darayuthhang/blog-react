//pa3 ba b--green bg-lightest-blue
//bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5

//pa3 ba b--green bg-lightest-blue
//pa2

import React from "react";


class SearchBox extends React.Component {
    constructor(props){
        super(props);
    }

    render() { 
        return (
          <div>
            <form onSubmit={this.props.submitForm}>
              <input
                className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"
                type="text"
                onChange={this.props.searchField}
              />
              <button className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                Start
              </button>
            </form>
          </div>
        );
    }
}


 
export default SearchBox;