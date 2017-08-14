// Find bugs and fix them
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {inputFieldValue: ''};
	}

	onInputChange(event) {
	}

	onFormSubmit(event) {
		event.preventDefault();

		this.props.fetchWeather(this.state.term);
		this.setState({inputFieldValue: ''});
	}

	render() {
		return (
			<form className="input-group">
				<input
					placeholder="Get a five day forcast with averages in your favorite cities"
					className="form-control"
					value={this.state.inputFieldValue}
					onChange={this.onInputChange} 
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
			);
	}
}

export default connect(null, null)(SearchBar);
