const BASE_URL = "https://zagster-service.herokuapp.com"

function updateView(data){
    console.log(data);
    
    
    var grc_to_columbia
    var grc_to_drake
    var grc_to_g5
    var grc_to_galveston
    var grc_to_grc
    var grc_to_mill
    var grc_to_osu
    var grc_to_ten_barrel



//GRC
        function saveGrcToG5() {
            $.getJSON(BASE_URL + "/rides/count/from/grc/to/g5", saveGrcToG5);
        }
        function saveGrcToG5(data) {
            grc_to_g5 = data.count;
        }
        function saveGrcToOsu() {
            $.getJSON(BASE_URL + "/rides/count/from/grc/to/osu_cascades", saveGrcToOsu);
        }
        function saveGrcToOsu(data){
            grc_to_osu = data.count;
        }
        function saveGrcToGrc() {
            $.getJSON(BASE_URL + "/rides/count/from/grc/to/grc", saveGrcToGrc);
        }
        function saveGrcToGrc(data){
            grc_to_grc = data.count;
        }
        function saveGrcToColumbia() {
            $.getJSON(BASE_URL + "/rides/count/from/grc/to/columbia_simpson", saveGrcToColumbia);
        }
        function saveGrcToColumbia(data){
            grc_to_columbia = data.count;
        }
        function saveGrcToDrake() {
            $.getJSON(BASE_URL + "/rides/count/from/grc/to/drake_park", saveGrcToDrake);
        }
        function saveGrcToDrake(data){
            grc_to_drake = data.count;
        }
        function saveGrcToGalveston() {
            $.getJSON(BASE_URL + "/rides/count/from/grc/to/galveston", saveGrcToGalveston);
        }
        function saveGrcToGalveston(data){
            grc_to_galveston = data.count;
        }
        function saveGrcToMill() {
            $.getJSON(BASE_URL + "/rides/count/from/grc/to/old_mill", saveGrcToMill);
        }
        function saveGrcToMill(data){
            grc_to_mill = data.count;
        }
        function saveGrcToTenBarrel() {
            $.getJSON(BASE_URL + "/rides/count/from/grc/to/ten_barrel", saveGrcToTenBarrel);
        }
        function saveGrcToTenBarrel(data){
            grc_to_ten_barrel = data.count;
        }


 
    $.when(
        $.getJSON(BASE_URL + "/rides/count/from/grc/to/g5", saveGrcToG5),
        $.getJSON(BASE_URL + "/rides/count/from/grc/to/osu_cascades", saveGrcToOsu),
        $.getJSON(BASE_URL + "/rides/count/from/grc/to/grc", saveGrcToGrc),
        $.getJSON(BASE_URL + "/rides/count/from/grc/to/columbia_simpson", saveGrcToColumbia),
        $.getJSON(BASE_URL + "/rides/count/from/grc/to/drake_park", saveGrcToDrake),
        $.getJSON(BASE_URL + "/rides/count/from/grc/to/galveston", saveGrcToGalveston),
        $.getJSON(BASE_URL + "/rides/count/from/grc/to/old_mill", saveGrcToMill),
        $.getJSON(BASE_URL + "/rides/count/from/grc/to/ten_barrel", saveGrcToTenBarrel),

    ). then(
        displayGrcChart
    );



function displayGrcChart() {

        var GrcChart = new Chart(ctx, {
        type: 'radar',
        // The data for our dataset
        data: {
            labels: ["GRC to Drake Park", "GRC to Columbia Simpson", "GRC to g5", "GRC to Galveston", "GRC to GRC", "GRC to Old Mill", "GRC to OSU Cascades", "GRC to TenBarrel"],
            datasets: [
                {
                    label: "GRC to Columbia Simpson Dataset", 
                    backgroundColor: 'rgb(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(225, 99, 132)',
                    data: [grc_to_columbia],
                },
                {
                    label: "GRC to Drake Park Dataset", 
                    backgroundColor: 'rgb(200, 50, 50, 0.2)',
                    borderColor: 'rgb(200, 50, 50)',
                    pointBackgroundColor: 'rgb(200, 50, 50)',
                    data: [grc_to_drake],
                },
                {
                    label: "GRC to g5 Dataset", 
                    backgroundColor: 'rgb(100, 50, 132, 0.2)',
                    borderColor: 'rgb(100, 50, 132)',
                    pointBackgroundColor: 'rgb(100, 50, 132)',
                    data: [grc_to_g5],
                },
                {
                    label: "GRC to Galveston Dataset", 
                    backgroundColor: 'rgb(50, 50, 132, 0.2)',
                    borderColor: 'rgb(50, 50, 132)',
                    pointBackgroundColor: 'rgb(50, 50, 132)',
                    data: [grc_to_galveston],
                },
                {
                    label: "GRC to GRC Dataset", 
                    backgroundColor: 'rgb(900, 75, 132, 0.2)',
                    borderColor: 'rgb(900, 75, 132)',
                    pointBackgroundColor: 'rgb(900, 75, 132)',
                    data: [grc_to_grc],
                },
                {
                    label: "GRC to Old Mill Dataset", 
                    backgroundColor: 'rgb(400, 50, 50, 0.2)',
                    borderColor: 'rgb(400, 50, 50)',
                    pointBackgroundColor: 'rgb(400, 50, 50)',
                    data: [grc_to_mill],
                },
                {
                    label: "GRC to OSU Cascades Dataset", 
                    backgroundColor: 'rgb(80, 80, 132, 0.2)',
                    borderColor: 'rgb(80, 80, 132)',
                    pointBackgroundColor: 'rgb(80, 80, 132)',
                    data: [grc_to_osu],
                },
                {
                    label: "GRC to Ten Barrel Dataset", 
                    backgroundColor: 'rgb(145, 50, 132, 0.2)',
                    borderColor: 'rgb(145, 50, 132)',
                    pointBackgroundColor: 'rgb(145, 50, 132)',
                    data: [grc_to_ten_barrel],
                },
            ],
            
        },
    })
}
}
