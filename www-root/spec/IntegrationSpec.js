describe("Integration", function() {
	var myCompetition, values, myEvent;

	// Load fixtures
	values = getJSONFixture('integration_values.json');

	it("should throw an error when Competition.addEvent(Event) and Event.startTime < Competition.startTime", function() {

		// Create Competition and Event objects
		myCompetition = new Competition(values.construct.startTime, values.construct.endTime);
		myEvent = new Event(values.construct.earlyStartTime, values.construct.endTime);

		expect(function(){
							myCompetition.addEvent(myEvent);
						}).toThrow(
							new Error("ERROR: Event.starttime cannot be less than Competition.startTime")
						);
	});

	it("should throw an error when Competition.addEvent(Event) and Event.startTime > Competition.endTime", function() {

		// Create Competition and Event objects
		myCompetition = new Competition(values.construct.startTime, values.construct.endTime);
		myEvent = new Event(values.construct.earlyStartTime, values.construct.endTime);

		expect(function(){
							myCompetition.addEvent(myEvent);
						}).toThrow(
							new Error("ERROR: Event.starttime cannot be less than Competition.startTime")
						);
	});

	it("should throw an error when created with bad constructor startTime argument", function() {
		expect(function(){
							new Competition(values.int1, values.float1);
						}).toThrow(
							new Error("ERROR: the startTime argument must be a unix timestamp (but in miliseconds)")
						);
	});

});