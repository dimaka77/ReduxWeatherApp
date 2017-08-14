import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {


	renderWeather(cityData) {

		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities =cityData.list.map(weather => weather.main.humidity);
		const {lon, lat} = cityData.city.coord;

		return (
			<tr key={name}>
				<td>
					<GoogleMap lon={lon} lat={lat} />
				</td>
				<td>
					<Chart  
						data={temps} 
						color="lightblue" 
						height={150} 
						units={"° Fahrenheit"} 
						width={175} />
				</td>
				<td>
					<Chart  
						data={pressures} 
						color="lightblue" 
						height={150} 
						units="hPa" 
						width={175} />
				</td>
				<td>
					<Chart  
							data={humidities} 
							color="lightblue" 
							height={150} 
							units="%" 
							width={175} />
				</td>
			</tr>
			)
	}

	render() {
		var tableStyle = {
			backgroundColor: "#262626",
			marginTop:"-15px"
		};

		return (
			<table className="table table-hover"  style={tableStyle}>
				<thead>
					<tr>
						<th>CITY</th>
						<th>TEMPERATURE</th>
						<th>PRESSURE</th>
						<th>HUMIDITY</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
			)
	}
}

function mapStateToProps({weather}) {
	return {weather};
}

export default connect(mapStateToProps)(WeatherList);
