import React from 'react';
import UserInput from './user-input.js';

import {
  Link
} from 'react-router-dom'

class Home extends React.Component {
	render() {
		return (
			<div className="container">
			<UserInput />
			</div>
		);
	}
}

module.exports = Home