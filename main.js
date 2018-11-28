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

    var drake_to_drake
    var drake_to_g5
    var drake_to_galveston
    var drake_to_grc
    var drake_to_mill
    var drake_to_osu
    var drake_to_ten_barrel
    var drake_to_columbia

    var columbia_to_columbia;
    var columbia_to_drake;
    var columbia_to_g5;
    var columbia_to_galveston;
    var columbia_to_grc;
    var columbia_to_mill;
    var columbia_to_osu;
    var columbia_to_ten_barrel;

    var g5_to_columbia;
    var g5_to_drake;
    var g5_to_g5;
    var g5_to_galveston;
    var g5_to_grc;
    var g5_to_mill;
    var g5_to_osu;
    var g5_to_ten_barrel;

    var galveston_to_columbia;
    var galveston_to_drake;
    var galveston_to_g5;
    var galveston_to_galveston;
    var galveston_to_grc;
    var galveston_to_mill;
    var galveston_to_osu;
    var galveston_to_ten_barrel;

    var old_mill_to_columbia;
    var old_mill_to_drake;
    var old_mill_to_g5;
    var old_mill_to_galveston;
    var old_mill_to_grc;
    var old_mill_to_mill;
    var old_mill_to_osu;
    var old_mill_to_ten_barrel;

    var osu_to_columbia;
    var osu_to_drake;
    var osu_to_g5;
    var osu_to_galveston;
    var osu_to_grc;
    var osu_to_mill;
    var osu_to_osu;
    var osu_to_ten_barrel;

    var ten_barrel_to_columbia;
    var ten_barrel_to_drake;
    var ten_barrel_to_g5;
    var ten_barrel_to_galveston;
    var ten_barrel_to_grc;
    var ten_barrel_to_mill;
    var ten_barrel_to_osu;
    var ten_barrel_to_ten_barrel;


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


        //Columbia Simpson
        function saveColumbiaToG5() {
            $.getJSON(BASE_URL + "/rides/count/from/columbia_simpson/to/g5", saveColumbiaToG5);
        }
        function saveColumbiaToG5(data){
            columbia_to_g5 = data.count;
        }
        function saveColumbiaToDrake() {
            $.getJSON(BASE_URL + "/rides/count/from/columbia_simpson/to/drake_park", saveColumbiaToDrake);
        }
        function saveColumbiaToDrake(data){
            columbia_to_drake = data.count;
        }
        function saveColumbiaToGalveston() {
            $.getJSON(BASE_URL + "/rides/count/from/columbia_simpson/to/galveston", saveColumbiaToGalveston);
        }
        function saveColumbiaToGalveston(data){
            columbia_to_galveston = data.count;
        }
        function saveColumbiaToGrc() {
            $.getJSON(BASE_URL + "/rides/count/from/columbia_simpson/to/grc", saveColumbiaToGrc);
        }
        function saveColumbiaToGalveston(data){
            columbia_to_grc = data.count;
        }
        function saveColumbiaToMill() {
            $.getJSON(BASE_URL + "/rides/count/from/columbia_simpson/to/old_mill", saveColumbiaToMill);
        }
        function saveColumbiaToMill(data){
            columbia_to_mill = data.count;
        }
        function saveColumbiaToOsu() {
            $.getJSON(BASE_URL + "/rides/count/from/columbia_simpson/to/osu_cascades", saveColumbiaToOsu);
        }
        function saveColumbiaToOsu(data){
            columbia_to_osu = data.count;
        }
        function saveColumbiaToTenBarrel() {
            $.getJSON(BASE_URL + "/rides/count/from/columbia_simpson/to/ten_barrel", saveColumbiaToTenBarrel);
        }
        function saveColumbiaToTenBarrel(data){
            columbia_to_ten_barrel = data.count;
        }
        function saveColumbiaToColumbia() {
            $.getJSON(BASE_URL + "/rides/count/from/columbia_simpson/to/columbia_simpson", saveColumbiaToColumbia);
        }
        function saveColumbiaToColumbia(data){
            columbia_to_columbia = data.count
        }


        //Drake Park
        function saveDrakeToDrake() {
            $.getJSON(BASE_URL + "/rides/count/from/drake_park/to/drake_park", saveDrakeToDrake);
        }
        function saveDrakeToDrake(data){
            drake_to_drake = data.count;
        }
        function saveDrakeToColumbia() {
            $.getJSON(BASE_URL + "/rides/count/from/drake_park/to/columbia_simpson", saveDrakeToColumbia);
        }
        function saveDrakeToColumbia(data){
            drake_to_columbia = data.count;
        }
        function saveDrakeToG5() {
            $.getJSON(BASE_URL + "/rides/count/from/drake_park/to/g5", saveDrakeToG5);
        }
        function saveDrakeToG5(data){
            drake_to_g5 = data.count;
        }
        function saveDrakeToGalveston() {
            $.getJSON(BASE_URL + "/rides/count/from/drake_park/to/galveston", saveDrakeToGalveston);
        }
        function saveDrakeToGalveston(data){
            drake_to_galveston = data.count;
        }
        function saveDrakeToGrc() {
            $.getJSON(BASE_URL + "/rides/count/from/drake_park/to/grc", saveDrakeToGrc);
        }
        function saveDrakeToGrc(data){
            drake_to_grc = data.count;
        }
        function saveDrakeToMill() {
            $.getJSON(BASE_URL + "/rides/count/from/drake_park/to/old_mill", saveDrakeToMill);
        }
        function saveDrakeToMill(data){
            drake_to_mill = data.count;
        }
        function saveDrakeToOsu() {
            $.getJSON(BASE_URL + "/rides/count/from/drake_park/to/osu_cascades", saveDrakeToOsu);
        }
        function saveDrakeToOsu(data){
            drake_to_osu = data.count;
        }
        function saveDrakeToTenBarrel() {
            $.getJSON(BASE_URL + "/rides/count/from/drake_park/to/ten_barrel", saveDrakeToTenBarrel);
        }
        function saveDrakeToTenBarrel(data){
            drake_to_ten_barrel = data.count;
        }


        // g5
        function saveG5ToG5() {
            $.getJSON(BASE_URL + "/rides/count/from/g5/to/g5", saveG5ToG5);
        }
        function saveG5ToG5(data){
            g5_to_g5 = data.count;
        }
        function saveG5ToColumbia() {
            $.getJSON(BASE_URL + "/rides/count/from/g5/to/columbia_simpson", saveG5ToColumbia);
        }
        function saveG5ToColumbia(data){
            g5_to_columbia = data.count;
        }
        function saveG5ToDrake() {
            $.getJSON(BASE_URL + "/rides/count/from/g5/to/drake_park", saveG5ToDrake);
        }
        function saveG5ToDrake(data){
            g5_to_drake = data.count;
        }
        function saveG5ToGalveston() {
            $.getJSON(BASE_URL + "/rides/count/from/g5/to/galveston", saveG5ToGalveston);
        }
        function saveG5ToGalveston(data){
            g5_to_galveston = data.count;
        }
        function saveG5ToGrc() {
            $.getJSON(BASE_URL + "/rides/count/from/g5/to/grc", saveG5ToGrc);
        }
        function saveG5ToGrc(data){
            g5_to_grc = data.count;
        }
        function saveG5ToMill() {
            $.getJSON(BASE_URL + "/rides/count/from/g5/to/old_mill", saveG5ToMill);
        }
        function saveG5ToMill(data){
            g5_to_mill = data.count;
        }
        function saveG5ToOsu() {
            $.getJSON(BASE_URL + "/rides/count/from/g5/to/osu_cascades", saveG5ToOsu);
        }
        function saveG5ToOsu(data){
            g5_to_osu = data.count;
        }
        function saveG5ToTenBarrel() {
            $.getJSON(BASE_URL + "/rides/count/from/g5/to/ten_barrel", saveG5ToTenBarrel);
        }
        function saveG5ToTenBarrel(data){
            g5_to_ten_barrel = data.count;
        }


        //Gavleston
        function saveGalvestonToGalveston() {
            $.getJSON(BASE_URL + "/rides/count/from/galveston/to/galveston", saveGalvestonToGalveston);
        }
        function saveGalvestonToGalveston(data){
            galveston_to_galveston = data.count;
        }
        function saveGalvestonToGrc() {
            $.getJSON(BASE_URL + "/rides/count/from/galveston/to/grc", saveGalvestonToGrc);
        }
        function saveGalvestonToGrc(data){
            galveston_to_grc = data.count;
        }
        function saveGalvestonToColumbia() {
            $.getJSON(BASE_URL + "/rides/count/from/galveston/to/columbia_simpson", saveGalvestonToColumbia);
        }
        function saveGalvestonToColumbia(data){
            galveston_to_columbia = data.count;
        }
        function saveGalvestonToDrake() {
            $.getJSON(BASE_URL + "/rides/count/from/galveston/to/drake_park", saveGalvestonToDrake);
        }
        function saveGalvestonToDrake(data){
            galveston_to_drake = data.count;
        }
        function saveGalvestonToG5() {
            $.getJSON(BASE_URL + "/rides/count/from/galveston/to/g5", saveGalvestonToG5);
        }
        function saveGalvestonToG5(data){
            galveston_to_g5 = data.count;
        }
        function saveGalvestonToOsu() {
            $.getJSON(BASE_URL + "/rides/count/from/galveston/to/osu_cascades", saveGalvestonToOsu);
        }
        function saveGalvestonToOsu(data){
            galveston_to_osu = data.count;
        }
        function saveGalvestonToMill() {
            $.getJSON(BASE_URL + "/rides/count/from/galveston/to/old_mill", saveGalvestonToMill);
        }
        function saveGalvestonToMill(data){
            galveston_to_mill = data.count;
        }
        function saveGalvestonToTenBarrel() {
            $.getJSON(BASE_URL + "/rides/count/from/galveston/to/ten_barrel", saveGalvestonToTenBarrel);
        }
        function saveGalvestonToTenBarrel(data){
            galveston_to_ten_barrel = data.count;
        }


        //Old Mill
        function saveOldMillToGrc() {
            $.getJSON(BASE_URL + "/rides/count/from/old_mill/to/grc", saveOldMillToGrc);
        }
        function saveOldMillToGrc(data){
            old_mill_to_grc = data.count;
        }
        function saveOldMillToColumbia() {
            $.getJSON(BASE_URL + "/rides/count/from/old_mill/to/columbia_simpson", saveOldMillToColumbia);
        }
        function saveOldMillToColumbia(data){
            old_mill_to_columbia = data.count;
        }
        function saveOldMillToDrake() {
            $.getJSON(BASE_URL + "/rides/count/from/old_mill/to/drake_park", saveOldMillToDrake);
        }
        function saveOldMillToDrake(data){
            old_mill_to_drake = data.count;
        }
        function saveOldMillToG5() {
            $.getJSON(BASE_URL + "/rides/count/from/old_mill/to/g5", saveOldMillToG5);
        }
        function saveOldMillToG5(data){
            old_mill_to_g5 = data.count;
        }
        function saveOldMillToGalveston() {
            $.getJSON(BASE_URL + "/rides/count/from/old_mill/to/galveston", saveOldMillToGalveston);
        }
        function saveOldMillToGalveston(data){
            old_mill_to_galveston = data.count;
        }
        function saveOldMillToMill() {
            $.getJSON(BASE_URL + "/rides/count/from/old_mill/to/old_mill", saveOldMillToMill);
        }
        function saveOldMillToMill(data){
            old_mill_to_mill = data.count;
        }
        function saveOldMillToOsu() {
            $.getJSON(BASE_URL + "/rides/count/from/old_mill/to/osu_cascades", saveOldMillToOsu);
        }
        function saveOldMillToOsu(data){
            old_mill_to_osu = data.count;
        }
        function saveOldMillToTenBarrel() {
            $.getJSON(BASE_URL + "/rides/count/from/old_mill/to/ten_barrel", saveOldMillToTenBarrel);
        }
        function saveOldMillToTenBarrel(data){
            old_mill_to_ten_barrel = data.count;
        }

        //OSU
        function saveOsuToGrc() {
            $.getJSON(BASE_URL + "/rides/count/from/osu_cascades/to/grc", saveOsuToGrc);
        }
        function saveOsuToGrc(data){
            osu_to_grc = data.count;
        }
        function saveOsuToColumbia() {
            $.getJSON(BASE_URL + "/rides/count/from/osu_cascades/to/columbia_simpson", saveOsuToColumbia);
        }
        function saveOsuToColumbia(data){
            osu_to_columbia = data.count;
        }
        function saveOsuToDrake() {
            $.getJSON(BASE_URL + "/rides/count/from/osu_cascades/to/drake_park", saveOsuToDrake);
        }
        function saveOsuToDrake(data){
            osu_to_drake = data.count;
        }
        function saveOsuToG5() {
            $.getJSON(BASE_URL + "/rides/count/from/osu_cascades/to/g5", saveOsuToG5);
        }
        function saveOsuToG5(data){
            osu_to_g5 = data.count;
        }
        function saveOsuToGalveston() {
            $.getJSON(BASE_URL + "/rides/count/from/osu_cascades/to/galveston", saveOsuToGalveston);
        }
        function saveOsuToGalveston(data){
            osu_to_galveston = data.count;
        }
        function saveOsuToMill() {
            $.getJSON(BASE_URL + "/rides/count/from/osu_cascades/to/old_mill", saveOsuToMill);
        }
        function saveOsuToMill(data){
            osu_to_mill = data.count;
        }
        function saveOsuToOsu() {
            $.getJSON(BASE_URL + "/rides/count/from/osu_cascades/to/osu_cascades", saveOsuToOsu);
        }
        function saveOsuToOsu(data){
            osu_to_osu = data.count;
        }
        function saveOsuToTenBarrel() {
            $.getJSON(BASE_URL + "/rides/count/from/osu_cascades/to/ten_barrel", saveOsuToTenBarrel);
        }
        function saveOsuToTenBarrel(data){
            osu_to_ten_barrel = data.count;
        }

        // Ten Barrel
        function saveTenBarrelToTenBarrel() {
            $.getJSON(BASE_URL + "/rides/count/from/ten_barrel/to/ten_barrel", saveTenBarrelToTenBarrel);
        }
        function saveTenBarrelToTenBarrel(data){
            ten_barrel_to_ten_barrel = data.count
        }
        function saveTenBarrelToGrc() {
            $.getJSON(BASE_URL + "/rides/count/from/ten_barrel/to/grc", saveTenBarrelToGrc);
        }
        function saveTenBarrelToGrc(data){
            ten_barrel_to_grc = data.count
        }
        function saveTenBarrelToColumbia() {
            $.getJSON(BASE_URL + "/rides/count/from/ten_barrel/to/columbia_simpson", saveTenBarrelToColumbia);
        }
        function saveTenBarrelToColumbia(data){
            ten_barrel_to_columbia = data.count
        }
        function saveTenBarrelToDrake() {
            $.getJSON(BASE_URL + "/rides/count/from/ten_barrel/to/drake_park", saveTenBarrelToDrake);
        }
        function saveTenBarrelToDrake(data){
            ten_barrel_to_drake = data.count
        }
        function saveTenBarrelToG5() {
            $.getJSON(BASE_URL + "/rides/count/from/ten_barrel/to/g5", saveTenBarrelToG5);
        }
        function saveTenBarrelToG5(data){
            ten_barrel_to_g5 = data.count
        }
        function saveTenBarrelToGalveston() {
            $.getJSON(BASE_URL + "/rides/count/from/ten_barrel/to/galveston", saveTenBarrelToGalveston);
        }
        function saveTenBarrelToGalveston(data){
            ten_barrel_to_galveston = data.count
        }
        function saveTenBarrelToMill() {
            $.getJSON(BASE_URL + "/rides/count/from/ten_barrel/to/old_mill", saveTenBarrelToMill);
        }
        function saveTenBarrelToMill(data){
            ten_barrel_to_mill = data.count
        }
        function saveTenBarrelToOsu() {
            $.getJSON(BASE_URL + "/rides/count/from/ten_barrel/to/osu_cascades", saveTenBarrelToOsu);
        }
        function saveTenBarrelToOsu(data){
            console.log(data["count"])
            ten_barrel_to_osu = data.count
        }

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

    $.when(
        $.getJSON(BASE_URL + "/rides/count/from/columbia_simpson/to/g5", saveColumbiaToG5),
        $.getJSON(BASE_URL + "/rides/count/from/columbia_simpson/to/drake_park", saveColumbiaToDrake),
        $.getJSON(BASE_URL + "/rides/count/from/columbia_simpson/to/galveston", saveColumbiaToGalveston),
        $.getJSON(BASE_URL + "/rides/count/from/columbia_simpson/to/grc", saveColumbiaToGrc),
        $.getJSON(BASE_URL + "/rides/count/from/columbia_simpson/to/old_mill", saveColumbiaToMill),
        $.getJSON(BASE_URL + "/rides/count/from/columbia_simpson/to/osu_cascades", saveColumbiaToOsu),
        $.getJSON(BASE_URL + "/rides/count/from/columbia_simpson/to/ten_barrel", saveColumbiaToTenBarrel),
        $.getJSON(BASE_URL + "/rides/count/from/columbia_simpson/to/columbia_simpson", saveColumbiaToColumbia),

    ). then(
        displayColumbiaChart
    );


    $.when(
        $.getJSON(BASE_URL + "/rides/count/from/drake_park/to/drake_park", saveDrakeToDrake),
        $.getJSON(BASE_URL + "/rides/count/from/drake_park/to/columbia_simpson", saveDrakeToColumbia),
        $.getJSON(BASE_URL + "/rides/count/from/drake_park/to/g5", saveDrakeToG5),
        $.getJSON(BASE_URL + "/rides/count/from/drake_park/to/galveston", saveDrakeToGalveston),
        $.getJSON(BASE_URL + "/rides/count/from/drake_park/to/grc", saveDrakeToGrc),
        $.getJSON(BASE_URL + "/rides/count/from/drake_park/to/old_mill", saveDrakeToMill),
        $.getJSON(BASE_URL + "/rides/count/from/drake_park/to/osu_cascades", saveDrakeToOsu),
        $.getJSON(BASE_URL + "/rides/count/from/drake_park/to/ten_barrel", saveDrakeToTenBarrel),

    ). then(
        displayDrakeChart
    );


    $.when(
        $.getJSON(BASE_URL + "/rides/count/from/g5/to/g5", saveG5ToG5),
        $.getJSON(BASE_URL + "/rides/count/from/g5/to/columbia_simpson", saveG5ToColumbia),
        $.getJSON(BASE_URL + "/rides/count/from/g5/to/drake_park", saveG5ToDrake),
        $.getJSON(BASE_URL + "/rides/count/from/g5/to/galveston", saveG5ToGalveston),
        $.getJSON(BASE_URL + "/rides/count/from/g5/to/grc", saveG5ToGrc),
        $.getJSON(BASE_URL + "/rides/count/from/g5/to/old_mill", saveG5ToMill),
        $.getJSON(BASE_URL + "/rides/count/from/g5/to/osu_cascades", saveG5ToOsu),
        $.getJSON(BASE_URL + "/rides/count/from/g5/to/ten_barrel", saveG5ToTenBarrel),
    ). then(
        displayG5Chart
    );

    $.when(
        $.getJSON(BASE_URL + "/rides/count/from/galveston/to/galveston", saveGalvestonToGalveston),
        $.getJSON(BASE_URL + "/rides/count/from/galveston/to/grc", saveGalvestonToGrc),
        $.getJSON(BASE_URL + "/rides/count/from/galveston/to/columbia_simpson", saveGalvestonToColumbia),
        $.getJSON(BASE_URL + "/rides/count/from/galveston/to/drake_park", saveGalvestonToDrake),
        $.getJSON(BASE_URL + "/rides/count/from/galveston/to/g5", saveGalvestonToG5),
        $.getJSON(BASE_URL + "/rides/count/from/galveston/to/osu_cascades", saveGalvestonToOsu),
        $.getJSON(BASE_URL + "/rides/count/from/galveston/to/old_mill", saveGalvestonToMill),
        $.getJSON(BASE_URL + "/rides/count/from/galveston/to/ten_barrel", saveGalvestonToTenBarrel),
    ). then(
        displayGalvestonChart
    );

    $.when(
        $.getJSON(BASE_URL + "/rides/count/from/old_mill/to/grc", saveOldMillToGrc),
        $.getJSON(BASE_URL + "/rides/count/from/old_mill/to/columbia_simpson", saveOldMillToColumbia),
        $.getJSON(BASE_URL + "/rides/count/from/old_mill/to/drake_park", saveOldMillToDrake),
        $.getJSON(BASE_URL + "/rides/count/from/old_mill/to/g5", saveOldMillToG5),
        $.getJSON(BASE_URL + "/rides/count/from/old_mill/to/galveston", saveOldMillToGalveston),
        $.getJSON(BASE_URL + "/rides/count/from/old_mill/to/old_mill", saveOldMillToMill),
        $.getJSON(BASE_URL + "/rides/count/from/old_mill/to/osu_cascades", saveOldMillToOsu),
        $.getJSON(BASE_URL + "/rides/count/from/old_mill/to/ten_barrel", saveOldMillToTenBarrel),
    ). then(
        displayOldMillChart
    );

    $.when(
        $.getJSON(BASE_URL + "/rides/count/from/osu_cascades/to/grc", saveOsuToGrc),
        $.getJSON(BASE_URL + "/rides/count/from/osu_cascades/to/columbia_simpson", saveOsuToColumbia),
        $.getJSON(BASE_URL + "/rides/count/from/osu_cascades/to/drake_park", saveOsuToDrake),
        $.getJSON(BASE_URL + "/rides/count/from/osu_cascades/to/g5", saveOsuToG5),
        $.getJSON(BASE_URL + "/rides/count/from/osu_cascades/to/galveston", saveOsuToGalveston),
        $.getJSON(BASE_URL + "/rides/count/from/osu_cascades/to/old_mill", saveOsuToMill),
        $.getJSON(BASE_URL + "/rides/count/from/osu_cascades/to/osu_cascades", saveOsuToOsu),
        $.getJSON(BASE_URL + "/rides/count/from/osu_cascades/to/ten_barrel", saveOsuToTenBarrel),
    ). then(
        displayOsuChart
    );

    $.when(
        $.getJSON(BASE_URL + "/rides/count/from/ten_barrel/to/ten_barrel", saveTenBarrelToTenBarrel),
        $.getJSON(BASE_URL + "/rides/count/from/ten_barrel/to/grc", saveTenBarrelToGrc),
        $.getJSON(BASE_URL + "/rides/count/from/ten_barrel/to/columbia_simpson", saveTenBarrelToColumbia),
        $.getJSON(BASE_URL + "/rides/count/from/ten_barrel/to/drake_park", saveTenBarrelToDrake),
        $.getJSON(BASE_URL + "/rides/count/from/ten_barrel/to/g5", saveTenBarrelToG5),
        $.getJSON(BASE_URL + "/rides/count/from/ten_barrel/to/galveston", saveTenBarrelToGalveston),
        $.getJSON(BASE_URL + "/rides/count/from/ten_barrel/to/old_mill", saveTenBarrelToMill),
        $.getJSON(BASE_URL + "/rides/count/from/ten_barrel/to/osu_cascades", saveTenBarrelToOsu),
    ). then(
        displayTenBarrelChart
    );



function displayColumbiaChart() {

    var ColumbiaChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ["Columbia Simpson to Drake Park", "Columbia Simpson to Columbia Simpson", "Columbia Simpson to g5", "Columbia Simpson to Galveston", "Columbia Simpson to GRC", "Columbia Simpson to Old Mill", "Columbia Simpson to OSU Cascades", "Columbia Simpson to TenBarrel"],
            datasets: [
                {
                    label: "Columbia Simpson to Columbia Simpson Dataset", 
                    backgroundColor: 'rgb(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(225, 99, 132)',
                    data: [columbia_to_columbia],
                },
                {
                    label: "Columbia to Drake Park Dataset", 
                    backgroundColor: 'rgb(200, 50, 50, 0.2)',
                    borderColor: 'rgb(200, 50, 50)',
                    pointBackgroundColor: 'rgb(200, 50, 50)',
                    data: [columbia_to_drake],
                },
                {
                    label: "Columbia to g5 Dataset", 
                    backgroundColor: 'rgb(100, 50, 132, 0.2)',
                    borderColor: 'rgb(100, 50, 132)',
                    pointBackgroundColor: 'rgb(100, 50, 132)',
                    data: [columbia_to_g5],
                },
                {
                    label: "Columbia to Galveston Dataset", 
                    backgroundColor: 'rgb(50, 50, 132, 0.2)',
                    borderColor: 'rgb(50, 50, 132)',
                    pointBackgroundColor: 'rgb(50, 50, 132)',
                    data: [columbia_to_galveston],
                },
                {
                    label: "Columbia to GRC Dataset", 
                    backgroundColor: 'rgb(900, 75, 132, 0.2)',
                    borderColor: 'rgb(900, 75, 132)',
                    pointBackgroundColor: 'rgb(900, 75, 132)',
                    data: [columbia_to_grc],
                },
                {
                    label: "Columbia to Old Mill Dataset", 
                    backgroundColor: 'rgb(400, 50, 50, 0.2)',
                    borderColor: 'rgb(400, 50, 50)',
                    pointBackgroundColor: 'rgb(400, 50, 50)',
                    data: [columbia_to_mill],
                },
                {
                    label: "Columbia to OSU Cascades Dataset", 
                    backgroundColor: 'rgb(80, 80, 132, 0.2)',
                    borderColor: 'rgb(80, 80, 132)',
                    pointBackgroundColor: 'rgb(80, 80, 132)',
                    data: [columbia_to_osu],
                },
                {
                    label: "Columbia to Ten Barrel Dataset", 
                    backgroundColor: 'rgb(145, 50, 132, 0.2)',
                    borderColor: 'rgb(145, 50, 132)',
                    pointBackgroundColor: 'rgb(145, 50, 132)',
                    data: [columbia_to_ten_barrel],
                },
            ],
            
        },
    })
}



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


function displayDrakeChart() {
    var DrakeChart = new Chart(ctx, {
        type: 'radar',
        // The data for our dataset
        data: {
            labels: ["Drake Park to Drake Park", "Drake to Columbia Simpson", "Drake to g5", "Drake to Galveston", "Drake to GRC", "Drake to Old Mill", "Drake to OSU Cascades", "Drake to TenBarrel"],
            datasets: [
                {
                    label: "Drake to Columbia Simpson Dataset", 
                    backgroundColor: 'rgb(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(225, 99, 132)',
                    data: [drake_to_columbia],
                },
                {
                    label: "Drake to Drake Park Dataset", 
                    backgroundColor: 'rgb(200, 50, 50, 0.2)',
                    borderColor: 'rgb(200, 50, 50)',
                    pointBackgroundColor: 'rgb(200, 50, 50)',
                    data: [drake_to_drake],
                },
                {
                    label: "Drake to g5 Dataset", 
                    backgroundColor: 'rgb(100, 50, 132, 0.2)',
                    borderColor: 'rgb(100, 50, 132)',
                    pointBackgroundColor: 'rgb(100, 50, 132)',
                    data: [drake_to_g5],
                },
                {
                    label: "Drake to Galveston Dataset", 
                    backgroundColor: 'rgb(50, 50, 132, 0.2)',
                    borderColor: 'rgb(50, 50, 132)',
                    pointBackgroundColor: 'rgb(50, 50, 132)',
                    data: [drake_to_galveston],
                },
                {
                    label: "Drake to GRC Dataset", 
                    backgroundColor: 'rgb(900, 75, 132, 0.2)',
                    borderColor: 'rgb(900, 75, 132)',
                    pointBackgroundColor: 'rgb(900, 75, 132)',
                    data: [drake_to_grc],
                },
                {
                    label: "Drake to Old Mill Dataset", 
                    backgroundColor: 'rgb(400, 50, 50, 0.2)',
                    borderColor: 'rgb(400, 50, 50)',
                    pointBackgroundColor: 'rgb(400, 50, 50)',
                    data: [drake_to_mill],
                },
                {
                    label: "Drake to OSU Cascades Dataset", 
                    backgroundColor: 'rgb(80, 80, 132, 0.2)',
                    borderColor: 'rgb(80, 80, 132)',
                    pointBackgroundColor: 'rgb(80, 80, 132)',
                    data: [drake_to_osu],
                },
                {
                    label: "Drake to Ten Barrel Dataset", 
                    backgroundColor: 'rgb(145, 50, 132, 0.2)',
                    borderColor: 'rgb(145, 50, 132)',
                    pointBackgroundColor: 'rgb(145, 50, 132)',
                    data: [drake_to_ten_barrel],
                },
            ],
            
        },
    })
}
function displayG5Chart(){
    var G5Chart = new Chart(ctx, {
        type: 'radar',
        // The data for our dataset
        data: {
            labels: ["G5 to Drake Park", "G5 to Columbia Simpson", "G5 to g5", "G5 to Galveston", "G5 to GRC", "G5 to Old Mill", "G5 to OSU Cascades", "G5 to TenBarrel"],
            datasets: [
                {
                    label: "g5 to Columbia Simpson Dataset", 
                    backgroundColor: 'rgb(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(225, 99, 132)',
                    data: [g5_to_columbia],
                },
                {
                    label: "g5 to Drake Park Dataset", 
                    backgroundColor: 'rgb(200, 50, 50, 0.2)',
                    borderColor: 'rgb(200, 50, 50)',
                    pointBackgroundColor: 'rgb(200, 50, 50)',
                    data: [g5_to_drake],
                },
                {
                    label: "g5 to g5 Dataset", 
                    backgroundColor: 'rgb(100, 50, 132, 0.2)',
                    borderColor: 'rgb(100, 50, 132)',
                    pointBackgroundColor: 'rgb(100, 50, 132)',
                    data: [g5_to_g5],
                },
                {
                    label: "g5 to Galveston Dataset", 
                    backgroundColor: 'rgb(50, 50, 132, 0.2)',
                    borderColor: 'rgb(50, 50, 132)',
                    pointBackgroundColor: 'rgb(50, 50, 132)',
                    data: [g5_to_galveston],
                },
                {
                    label: "g5 to GRC Dataset", 
                    backgroundColor: 'rgb(900, 75, 132, 0.2)',
                    borderColor: 'rgb(900, 75, 132)',
                    pointBackgroundColor: 'rgb(900, 75, 132)',
                    data: [g5_to_grc],
                },
                {
                    label: "g5 to Old Mill Dataset", 
                    backgroundColor: 'rgb(400, 50, 50, 0.2)',
                    borderColor: 'rgb(400, 50, 50)',
                    pointBackgroundColor: 'rgb(400, 50, 50)',
                    data: [g5_to_mill],
                },
                {
                    label: "g5 to OSU Cascades Dataset", 
                    backgroundColor: 'rgb(80, 80, 132, 0.2)',
                    borderColor: 'rgb(80, 80, 132)',
                    pointBackgroundColor: 'rgb(80, 80, 132)',
                    data: [g5_to_osu],
                },
                {
                    label: "g5 to Ten Barrel Dataset", 
                    backgroundColor: 'rgb(145, 50, 132, 0.2)',
                    borderColor: 'rgb(145, 50, 132)',
                    pointBackgroundColor: 'rgb(145, 50, 132)',
                    data: [g5_to_ten_barrel],
                },
            ],
            
        },
    })
}
function displayGalvestonChart()  {
    var GalvestonChart = new Chart(ctx, {
        type: 'radar',
        // The data for our dataset
        data: {
            labels: ["Galveston to Drake Park", "Galveston to Columbia Simpson", "Galveston to g5", "Galveston to Galveston", "Galveston to GRC", "Galveston to Old Mill", "Galveston to OSU Cascades", "Galveston to TenBarrel"],
            datasets: [
                {
                    label: "Galveston to Columbia Simpson Dataset", 
                    backgroundColor: 'rgb(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(225, 99, 132)',
                    data: [galveston_to_columbia],
                },
                {
                    label: "Galveston to Drake Park Dataset", 
                    backgroundColor: 'rgb(200, 50, 50, 0.2)',
                    borderColor: 'rgb(200, 50, 50)',
                    pointBackgroundColor: 'rgb(200, 50, 50)',
                    data: [galveston_to_drake],
                },
                {
                    label: "Galveston to g5 Dataset", 
                    backgroundColor: 'rgb(100, 50, 132, 0.2)',
                    borderColor: 'rgb(100, 50, 132)',
                    pointBackgroundColor: 'rgb(100, 50, 132)',
                    data: [galveston_to_g5],
                },
                {
                    label: "Galveston to Galveston Dataset", 
                    backgroundColor: 'rgb(50, 50, 132, 0.2)',
                    borderColor: 'rgb(50, 50, 132)',
                    pointBackgroundColor: 'rgb(50, 50, 132)',
                    data: [galveston_to_galveston],
                },
                {
                    label: "Galveston to GRC Dataset", 
                    backgroundColor: 'rgb(900, 75, 132, 0.2)',
                    borderColor: 'rgb(900, 75, 132)',
                    pointBackgroundColor: 'rgb(900, 75, 132)',
                    data: [galveston_to_grc],
                },
                {
                    label: "Galveston to Old Mill Dataset", 
                    backgroundColor: 'rgb(400, 50, 50, 0.2)',
                    borderColor: 'rgb(400, 50, 50)',
                    pointBackgroundColor: 'rgb(400, 50, 50)',
                    data: [galveston_to_mill],
                },
                {
                    label: "Galveston to OSU Cascades Dataset", 
                    backgroundColor: 'rgb(80, 80, 132, 0.2)',
                    borderColor: 'rgb(80, 80, 132)',
                    pointBackgroundColor: 'rgb(80, 80, 132)',
                    data: [galveston_to_osu],
                },
                {
                    label: "Galveston to Ten Barrel Dataset", 
                    backgroundColor: 'rgb(145, 50, 132, 0.2)',
                    borderColor: 'rgb(145, 50, 132)',
                    pointBackgroundColor: 'rgb(145, 50, 132)',
                    data: [galveston_to_ten_barrel],
                },
            ],
            
        },
    })
}
function displayOldMillChart(){
    var OldMillChart = new Chart(ctx, {
        type: 'radar',
        // The data for our dataset
        data: {
            labels: ["Old Mill to Drake Park", "Old Mill to Columbia Simpson", "Old Mill to g5", "Old Mill to Galveston", "Old Mill to GRC", "Old Mill to Old Mill", "Old Mill to OSU Cascades", "Old Mill to Ten Barrel"],
            datasets: [
                {
                    label: "Old Mill to Columbia Simpson Dataset", 
                    backgroundColor: 'rgb(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(225, 99, 132)',
                    data: [old_mill_to_columbia],
                },
                {
                    label: "Old Mill to Drake Park Dataset", 
                    backgroundColor: 'rgb(200, 50, 50, 0.2)',
                    borderColor: 'rgb(200, 50, 50)',
                    pointBackgroundColor: 'rgb(200, 50, 50)',
                    data: [old_mill_to_drake],
                },
                {
                    label: "Old Mill to g5 Dataset", 
                    backgroundColor: 'rgb(100, 50, 132, 0.2)',
                    borderColor: 'rgb(100, 50, 132)',
                    pointBackgroundColor: 'rgb(100, 50, 132)',
                    data: [old_mill_to_g5],
                },
                {
                    label: "Old Mill to Galveston Dataset", 
                    backgroundColor: 'rgb(50, 50, 132, 0.2)',
                    borderColor: 'rgb(50, 50, 132)',
                    pointBackgroundColor: 'rgb(50, 50, 132)',
                    data: [old_mill_to_galveston],
                },
                {
                    label: "Old Mill to GRC Dataset", 
                    backgroundColor: 'rgb(900, 75, 132, 0.2)',
                    borderColor: 'rgb(900, 75, 132)',
                    pointBackgroundColor: 'rgb(900, 75, 132)',
                    data: [old_mill_to_grc],
                },
                {
                    label: "Old Mill to Old Mill Dataset", 
                    backgroundColor: 'rgb(400, 50, 50, 0.2)',
                    borderColor: 'rgb(400, 50, 50)',
                    pointBackgroundColor: 'rgb(400, 50, 50)',
                    data: [old_mill_to_mill],
                },
                {
                    label: "Old Mill to OSU Cascades Dataset", 
                    backgroundColor: 'rgb(80, 80, 132, 0.2)',
                    borderColor: 'rgb(80, 80, 132)',
                    pointBackgroundColor: 'rgb(80, 80, 132)',
                    data: [old_mill_to_osu],
                },
                {
                    label: "Old Mill to Ten Barrel Dataset", 
                    backgroundColor: 'rgb(145, 50, 132, 0.2)',
                    borderColor: 'rgb(145, 50, 132)',
                    pointBackgroundColor: 'rgb(145, 50, 132)',
                    data: [old_mill_to_ten_barrel],
                },
            ],
            
        },
    })

}
function displayOsuChart() {
    var OsuChart = new Chart(ctx, {
        type: 'radar',
        // The data for our dataset
        data: {
            labels: ["OSU Cascades to Drake Park", "OSU Cascades to Columbia Simpson", "OSU Cascades to g5", "OSU Cascades to Galveston", "OSU Cascades to GRC", "OSU Cascades to Old Mill", "OSU Cascades to OSU Cascades", "OSU Cascades to Ten Barrel"],
            datasets: [
                {
                    label: "OSU Cascades to Columbia Simpson Dataset", 
                    backgroundColor: 'rgb(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(225, 99, 132)',
                    data: [osu_to_columbia],
                },
                {
                    label: "OSU Cascades to Drake Park Dataset", 
                    backgroundColor: 'rgb(200, 50, 50, 0.2)',
                    borderColor: 'rgb(200, 50, 50)',
                    pointBackgroundColor: 'rgb(200, 50, 50)',
                    data: [osu_to_drake],
                },
                {
                    label: "OSU Cascades to g5 Dataset", 
                    backgroundColor: 'rgb(100, 50, 132, 0.2)',
                    borderColor: 'rgb(100, 50, 132)',
                    pointBackgroundColor: 'rgb(100, 50, 132)',
                    data: [osu_to_g5],
                },
                {
                    label: "OSU Cascades to Galveston Dataset", 
                    backgroundColor: 'rgb(50, 50, 132, 0.2)',
                    borderColor: 'rgb(50, 50, 132)',
                    pointBackgroundColor: 'rgb(50, 50, 132)',
                    data: [osu_to_galveston],
                },
                {
                    label: "OSU Cascades to GRC Dataset", 
                    backgroundColor: 'rgb(900, 75, 132, 0.2)',
                    borderColor: 'rgb(900, 75, 132)',
                    pointBackgroundColor: 'rgb(900, 75, 132)',
                    data: [osu_to_grc],
                },
                {
                    label: "OSU Cascades to Old Mill Dataset", 
                    backgroundColor: 'rgb(400, 50, 50, 0.2)',
                    borderColor: 'rgb(400, 50, 50)',
                    pointBackgroundColor: 'rgb(400, 50, 50)',
                    data: [osu_to_mill],
                },
                {
                    label: "OSU Cascades to OSU Cascades Dataset", 
                    backgroundColor: 'rgb(80, 80, 132, 0.2)',
                    borderColor: 'rgb(80, 80, 132)',
                    pointBackgroundColor: 'rgb(80, 80, 132)',
                    data: [osu_to_osu],
                },
                {
                    label: "OSU Cascades to Ten Barrel Dataset", 
                    backgroundColor: 'rgb(145, 50, 132, 0.2)',
                    borderColor: 'rgb(145, 50, 132)',
                    pointBackgroundColor: 'rgb(145, 50, 132)',
                    data: [osu_to_ten_barrel],
                },
            ],
            
        },
    })
}
function displayTenBarrelChart() {
    var TenBarrelChart = new Chart(ctx, {
        type: 'radar',
        // The data for our dataset
        data: {
            labels: ["Ten Barrel to Drake Park", "Ten Barrel to Columbia Simpson", "Ten Barrel to g5", "Ten Barrel to Galveston", "Ten Barrel to GRC", "Ten Barrel to Old Mill", "Ten Barrel to OSU Cascades", "Ten Barrel to Ten Barrel"],
            datasets: [
                {
                    label: "Ten Barrel to Columbia Simpson Dataset", 
                    backgroundColor: 'rgb(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(225, 99, 132)',
                    data: [0,10,5,],
                },
                {
                    label: "Ten Barrel to Drake Park Dataset", 
                    backgroundColor: 'rgb(200, 50, 50, 0.2)',
                    borderColor: 'rgb(200, 50, 50)',
                    pointBackgroundColor: 'rgb(200, 50, 50)',
                    data: [0,0,015,43,],
                },
                {
                    label: "Ten Barrel to g5 Dataset", 
                    backgroundColor: 'rgb(100, 50, 132, 0.2)',
                    borderColor: 'rgb(100, 50, 132)',
                    pointBackgroundColor: 'rgb(100, 50, 132)',
                    data: [0,5,19,],
                },
                {
                    label: "Ten Barrel to Galveston Dataset", 
                    backgroundColor: 'rgb(50, 50, 132, 0.2)',
                    borderColor: 'rgb(50, 50, 132)',
                    pointBackgroundColor: 'rgb(50, 50, 132)',
                    data: [24,],
                },
                {
                    label: "Ten Barrel to GRC Dataset", 
                    backgroundColor: 'rgb(900, 75, 132, 0.2)',
                    borderColor: 'rgb(900, 75, 132)',
                    pointBackgroundColor: 'rgb(900, 75, 132)',
                    data: [11, 54, 23, ],
                },
                {
                    label: "Ten Barrel to Old Mill Dataset", 
                    backgroundColor: 'rgb(400, 50, 50, 0.2)',
                    borderColor: 'rgb(400, 50, 50)',
                    pointBackgroundColor: 'rgb(400, 50, 50)',
                    data: [45, 6, 19],
                },
                {
                    label: "Ten Barrel to OSU Cascades Dataset", 
                    backgroundColor: 'rgb(80, 80, 132, 0.2)',
                    borderColor: 'rgb(80, 80, 132)',
                    pointBackgroundColor: 'rgb(80, 80, 132)',
                    data: [13, 45,22],
                },
                {
                    label: "Ten Barrel to Ten Barrel Dataset", 
                    backgroundColor: 'rgb(145, 50, 132, 0.2)',
                    borderColor: 'rgb(145, 50, 132)',
                    pointBackgroundColor: 'rgb(145, 50, 132)',
                    data: [ten_barrel_to_ten_barrel],
                },
            ],
            
        },
    });
}
