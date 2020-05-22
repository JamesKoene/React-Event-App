import React from 'react';
import UserInput from './components/user-input.js';
import Nav from './components/nav.js';
import userInput from './components/user-input.js';
import ComingSoon from './components/ComingSoon.js';
import Genre from './components/Genre.js';
import Home from './components/Home.js';
import Location from './utils/location.js';
import 'bootstrap';
import  { BrowserRouter } from 'react-router-dom';
import  { Route, Switch} from 'react-router-dom';






class App extends React.Component {

	render() {
		return (
			<BrowserRouter>
				<div className="outer-container">
				<Nav /> 				
				<Switch>
					<Route exact path='/' component={Home}/>
				    <Route path='/Near-You' component={Location}/>
				    <Route path='/Genre' component={Genre}/>
				    <Route path='/Coming-Soon' component={ComingSoon}/>
				    <Route render={function () {  return <p>Not Found</p>  }} />
    		    </Switch>
    			</div>
    		</BrowserRouter>
		);
	}
}

module.exports = App