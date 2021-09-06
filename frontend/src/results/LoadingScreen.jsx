import React from 'react';

export default class LoadingScreen extends React.Component {
	render() {
		return (
			<div className="loadingScreen">
				<div class="spinner-border text-light" role="status"></div>

				<p>Loading...</p>
			</div>
		)
	}
}