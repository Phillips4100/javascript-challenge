// write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

// Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.

// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.

var ufoData = data;

var tbody = d3.select('tbody')

var filter = d3.select('.btn-default');

filter.on('click', function() {
    // location.reload();
    // d3.event.preventDefault();

    // collect input values
    var date = d3.select('#Date');
    var dateVal = date.property("value").toLowerCase().trim();
    var city = d3.select('#City');
    var cityVal = city.property("value").toLowerCase().trim();
    var state = d3.select('#State');
    var stateVal = state.property("value").toLowerCase().trim();

    location.reload();
    // create filters for each value
    if (dateVal != "") {
        ufoData = ufoData.filter(input => input.datetime === dateVal)
    }
    if (cityVal != "") {
        ufoData = ufoData.filter(input => input.city === cityVal)
    }
    if (stateVal != "") {
        ufoData = ufoData.filter(input => input.state === stateVal)
    }
    console.log(ufoData)
    renderTable();
});

renderTable();

// create table
 function renderTable() {
    ufoData.forEach(function(sighting) {
        // location.reload();
        //  console.log (sightings);
         var row = tbody.append('tr')
         Object.entries(sighting).forEach(function([key, value]) {
             var cell = tbody.append('td');
             cell.text(value);
         });
     });
 }