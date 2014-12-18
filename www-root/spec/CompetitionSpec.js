describe("Competition", function() {
	var competition

	// Load constructor fixtures
	var goodConstuctorData1 = getJSONFixture('competition_constructor1.json');

	it("should be created with correct properties from good constructor values", function() {

		competition = new Competition(goodConstuctorData1.startTime, goodConstuctorData1.endTime);

		// Check if properties for startime and endtime match with constructor data.
		expect(competition.startTime.getTime()).toEqual(goodConstuctorData1.startTime);
		expect(competition.endTime.getTime()).toEqual(goodConstuctorData1.endTime);
	});

	
});

///// Temp below

/*
  it("should create an event", function() {
    player.play(song);

    player = 

    expect(player.currentlyPlayingSong).toEqual(song);

    //demonstrates use of custom matcher
    expect(player).toBePlaying(song);
  });
});
*/
