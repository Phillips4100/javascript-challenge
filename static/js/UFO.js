// write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

// Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.

// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.

var ufoData = data;

var tbody = d3.select('tbody')
renderTable();

var filter = d3.select('.btn-default');

filter.on('click', function() {
    // $("#table").empty();
    d3.event.preventDefault();
    
    // collect input values
    var date = d3.select('#Date');
    var dateVal = date.property("value").toLowerCase().trim();
    var city = d3.select('#City');
    var cityVal = city.property("value").toLowerCase().trim();
    var state = d3.select('#State');
    var stateVal = state.property("value").toLowerCase().trim();
    
    // create filters for each value
    if (dateVal != "") {
        ufoData1 = ufoData.filter(input => input.datetime === dateVal)
    }
    if (cityVal != "") {
        ufoData1 = ufoData.filter(input => input.city === cityVal)
    }
    if (stateVal != "") {
        ufoData1 = ufoData.filter(input => input.state === stateVal)
    }
    console.log(ufoData1)
    renderNewTable();
});

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

function renderNewTable() {
    $("tbody").empty();
    console.log(ufoData1);
    ufoData1.forEach(function(sighting) {
        var row = tbody.append('tr')
        Object.entries(sighting).forEach(function([key, value]) {
            var cell = tbody.append('td');
            cell.text(value);
        });
    });
 }