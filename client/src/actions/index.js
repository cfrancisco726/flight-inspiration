import axios from 'axios';

var bodyParser = require('body-parser');

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');

	dispatch({ type: 'FETCH_USER', payload: res.data });
};

export function fetchTrip(trip) {
	return function(dispatch) {
		axios
			.post('/api/trip', trip)
			.then(function(res) {
				dispatch({ type: 'FETCH_TRIP', payload: res.data });
			})
			.catch(function(error) {
				dispatch({
					type: 'FETCH_TRIP_REJECTED',
					msg: 'invalid entry'
				});
			});
	};
}

export function fetchTripList() {
	return function(dispatch) {
		axios
			.get('/api/triplist')
			.then(function(res) {
				dispatch({ type: 'FETCH_TRIP_LIST', payload: res.data });
			})
			.catch(function(err) {
				dispatch({
					type: 'FETCH_TRIP_LIST_REJECTED'
				});
			});
	};
}

export function addToTripList(trip) {
	return function(dispatch) {
		axios
			.post('/api/triplist', trip)
			.then(function(res) {
				dispatch({ type: 'ADD_TO_TRIP_LIST', payload: res.data });
			})
			.catch(function(err) {
				dispatch({
					type: 'ADD_TO_TRIP_LIST_REJECTED'
				});
			});
	};
}
export function deleteTripItem(id) {
	return function(dispatch) {
		axios
			.delete('/api/triplist/' + id)
			.then(function(res) {
				dispatch({ type: 'DELETE_TRIP_ITEM', payload: id });
			})
			.catch(function(err) {
				dispatch({
					type: 'DELETE_TRIP_ITEM_REJECTED'
				});
			});
	};
}
