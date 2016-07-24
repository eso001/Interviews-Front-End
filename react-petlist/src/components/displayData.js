import React, {Component} from 'react';
import {connect} from 'react-redux';

class DisplayData extends Component{
	renderData(results){
		if(!results){
			return <div>Loading...</div>
		}
		return results.map(function(user, ind){

			let index;
			let description;

			if(user.description && user.description.length >= 48){
				for(let i = user.description.length; i > 0; i--){
					if(user.description[i] === " "){
						index = i;
						break;
					}
				}
				description = user.description.slice(0,index) + "..." 
			}

			let lastName = user.user.last[0].toUpperCase();
			return (
				<div key={ind}>
					{user.title}
					<div>
						Name: 
						<span>{user.user.first + ' '}</span>
						<span>{lastName + '.'}</span>
					</div>
					<div>
						Name of {user.pet.type}: {' ' + user.pet.name}
					</div>
					<div>
						{description}
					</div>
				</div>
			)
		})
	}
	render(){

		if(this.props.searchResults.data){
			var results = this.props.searchResults.data;
		}

		return (
				<div>{this.renderData(results)}</div>
		)
	}
}

function mapStateToProps(state){
  return {
    searchResults: state.search
  }
}

export default connect(mapStateToProps)(DisplayData);