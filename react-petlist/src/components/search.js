import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { connect } from 'react-redux';
import * as actions from '../actions/indexActions';
import DisplayData from './displayData';

class Search extends Component {

  componentWillMount(){
    const {rootSearch} = this.props;
    rootSearch();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  search(event){
    const {sittingSearch, boardingSearch} = this.props;
    var val = event.target.value;
    if(val === "boarding"){
      boardingSearch()
    }
    if(val === "sitting"){
      sittingSearch()
    }
  }
  
  render() {
    return (
      <span>
        <form action="">
          <input type="radio" name="lookingFor" value="boarding" onClick={this.search.bind(this)}/>Boarding(At host's home)<br/>
          <input type="radio" name="lookingFor" value="sitting" onClick={this.search.bind(this)}/>Sitting(At your home)
        </form>
        <DisplayData />
      </span>
    );
  }
}
export default connect(null, actions)(Search);