import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index'

	// iniciate states
	
class SearchBar extends Component {
	
	constructor (props) {
		
		super(props);
		this.state = {term: ''};

		// 
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);

	}
	
	onInputChange (event) {
		// using a call back that ref to this, need to bind the context this
		this.setState({term: event.target.value})
	}

	onFormSubmit(event){
		event.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({term:''})
	}


	render () {
		return (
			<form onSubmit = {this.onFormSubmit} className = "input-group">
				<input 
					placeholder = "Get a five days weather procast in your favorite cities"
					className = "form-control"
					value = {this.state.term}
					onChange = {this.onInputChange}
				/>

			<span className = "input-group-btn">
      			<button type = "submit" className = "btn btn-secondary"> Submit </button>
      		</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchWeather}, dispatch);
}

// first arg describle don't care state here
export default connect(null, mapDispatchToProps) (SearchBar)
