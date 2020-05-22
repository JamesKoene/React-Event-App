import React from 'react';
import  { Link } from 'react-router-dom';
import api from '../utils/api.js';

function GridItem(props) {
    
  
    return <div className="grid">
            <a href={props.URL}>
                <img src={props.imgURL[0].url} />
                <div className="artist">
                <h3>{props.Name}</h3>
                <span>@{props.Venue} </span>
                <span>{props.Date}</span>
                </div>
            </a>
           </div>
}

class UserInput extends React.Component {
    constructor(props) {
    super(props);
    this.state = {City: '', State: '', Data: []};

    this.handleCity = this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
 
  }

handleCity(event) {this.setState({City: event.target.value});}
handleState(event) {this.setState({State: event.target.value});};



componentWillReceiveProps(nextProps) {
if (this.state.City.length > 0 && this.state.State.length > 0) {api.request("event", {"city":this.state.City, "stateCode":this.state.State}).then(function (response) {
        this.setState(function () {
          return {
            Data: response._embedded.events
          }
        });
      }.bind(this));}
      
else if (nextProps.hash && this.state.City.length == 0 && this.state.State.length == 0) {
    api.request("event", {"geoPoint": nextProps.hash}).then(function (response) {
        this.setState(function () {
          return {
            Data: response._embedded.events
          }
        });
      }.bind(this))};
}



Submit() {


}  


	render() {
//  this.state.Data.forEach(function(element) {
//   element.images.filter(function(ele){return ele.width == 305})
// });
var GridArray = this.state.Data.map(function(current, index){   
    return <GridItem key={index} Name={current._embedded.attractions[0].name} imgURL={current.images.filter(function(ele){return ele.width == 305 && ele.height == 203})} URL={current.url} Date={current.dates.start.localDate} Venue={current._embedded.venues[0].name}/>
});
		return (
            <div className="container-fluid">
            <h1>Find Events</h1>
                  <form> 
                            <div className="form-row">
                              <div className="col-md-2">
                                <input className="form-control" id="validationCity" type="text" placeholder="City" value={this.state.City} onChange={this.handleCity} required />
                              </div>
                              <div className="col-md-2">
                                <input className="form-control" id="validationState" type="text" placeholder="State Abbreviation" value={this.state.State} onChange={this.handleState} required />
                              </div>
                              <div className="col-md-2">
            
<button type="button submit"  className="btn btn-primary btn-block" onClick={this.Submit}><Link to={{search: '?city='+this.state.City+'&'+'stateCode='+this.state.State} }>Submit</Link></button>
                              </div>
                            </div>
                            
                    </form> 
                <div className="row justify-content-sm-center">
                {GridArray}      
                </div>
            </div>
//return genre name and id as paramers then use genre.js as the function
		);
	}
}


module.exports = UserInput