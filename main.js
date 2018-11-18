// http://tinyurl.com/cs160nov05

const BASE_URL = "https://zagster-service.herokuapp.com"


$(updateView)

function updateView() {
    $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
    $.getJSON(BASE_URL + "/rides/count/columbia_simpson" , printData)
}

function updateRideCount(data){
    numberOfRides = data.count
    $("h2#rideCount").html(numberOfRides)
}

function printData(data){
    console.log(data);
}
