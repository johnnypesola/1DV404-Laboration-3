"use strict"

window.onload = function(){

	var startTime = new Date(2014, 12, 24);
	var endTime = new Date(2014, 12, 28);

	var myCompetition = new Competition(startTime, endTime);

	var myEvent = new Event();

	console.log(myCompetition.startTime);
	console.log(myCompetition.endTime);

}


function Competition(startTime, endTime){

	var _startTime,
		_endTime,
		_eventsArray = [];

    // Properties with Getters and Setters
    Object.defineProperties(this, {
        "startTime": {
            get: function(){ return this._startTime || ""; },
            
            set: function(value){
                if(value !== null && value instanceof Date){
                    this._startTime = value;
                }
                else{
                    throw new Error("ERROR: the startTime argument must be a Date object");
                }
            }
        },
        "endTime": {
            get: function(){ return this._endTime || ""; },
            
            set: function(value){
                if(value !== null && value instanceof Date){
                    this._endTime = value;
                }
                else{
                    throw new Error("ERROR: the endTime argument must be a Date object");
                }
            }
        }
    });

    Competition.prototype = {
    	
    	constructor: 	Competition,

    	addEvent: function(eventObj){

			// Check that event is an object of right type.
			if(eventObj !== null && eventObj instanceof Event){
				// Add event to array of events
				this._eventsArray.push(eventObj);
			}
    	}
    }

    // Assing default values to object
    this.startTime = startTime;
    this.endTime = endTime;
}

function Event(){

}




