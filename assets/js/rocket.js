$(document).ready(function () {

    $('#residential').click(function () {
        $(".nb_shop").hide();
        $(".nb_park").hide();
        $(".nb_elevator").hide();
        $(".nb_comp").hide();
        $(".nb_occ").hide();
        $(".nb_ha").hide();
        $(".nb_apart").show();
        $(".nb_floor").show();
        $(".nb_basement").show();


    });
    $('#commercial').click(function () {
        $(".nb_apart").hide();
        $(".nb_comp").hide();
        $(".nb_occ").hide();
        $(".nb_ha").hide();
        $(".nb_shop").show();
        $(".nb_floor").show();
        $(".nb_basement").show();
        $(".nb_park").show();
        $(".nb_elevator").show();


    });
    $('#corporate').click(function () {
        $(".nb_apart").hide();
        $(".nb_shop").hide();
        $(".nb_elevator").hide();
        $(".nb_ha").hide();
        $(".nb_comp").show();
        $(".nb_floor").show();
        $(".nb_basement").show();
        $(".nb_park").show();
        $(".nb_occ").show();


    });
    $('#hybrid').click(function () {
        $(".nb_apart").hide();
        $(".nb_comp").hide();
        $(".nb_elevator").hide();
        $(".nb_shop").show();
        $(".nb_floor").show();
        $(".nb_basement").show();
        $(".nb_park").show();
        $(".nb_occ").show();
        $(".nb_ha").show();
    });

    $("#calcul_button").click(function () {
        console.log("test");
        var data = collect_data();
        console.log("data", data);
        calcul(data);
    });

});



function calcul(data) {

    console.log("calcul");

    var building_type = $("input[name='build type']:checked").val();
    console.log("building_type", building_type);
    var category = $("input[name='cat type']:checked").val();
    console.log("category", category);

    if (building_type == 'residential') {

        //Calcul average_unit_per_floor
        var average_unit_per_floor = (data["nb_apart"] / data["nb_floor"]);
        console.log("average_unit_per_floor", average_unit_per_floor);
        //Calculer le nombre de cages necessaires
        //moyenne divise par 6
        var elevatorshaftnbrrequired = Math.ceil(average_unit_per_floor / 6);
        console.log("elevatorshaftnbrrequired", elevatorshaftnbrrequired);
        // nombre de cages * 2 a toutes les tranches de 20 etages
        var multiplication_factor = Math.floor(data["nb_floor"] / 20);
        console.log("multiplication_factor ", multiplication_factor);
        var price = null;
        var base_price = (elevatorshaftnbrrequired * category);
        console.log("base_price", base_price);

        if (data["nb_floor"] < 20) {
            price = base_price;
        }
        else {
            price = ((multiplication_factor * 2) * base_price);
        }
        console.log("price", price);

    

        if (category == 7565) {

            console.log(price + (price * 0.10))
            f_i = (price + (price * 0.10))
            console.log(f_i)
            $("#PRIX").html(f_i);
        } else if 
            (category == 12345) {
    
            f_i = (price + (price * 0.13))
            console.log(f_i)
        } else {
            console.log(category)
    
    
            f_i = (price + (price * 0.16))
    
        } $("#PRIX").html(f_i);


    }






    building_type = $("input[name='build type']:checked").val();
    console.log("building_type", building_type);
    category = $("input[name='cat type']:checked").val();
    console.log("category", category);
    var f_i
    var f_ii
    if (building_type == 'commercial') {

        var number_of_elevator = (data["nb_elevator"])
        console.log(number_of_elevator);
        console.log(category);
        price = (number_of_elevator * category)
        console.log('price:' + price);
    

    
    if (category == 7565) {

        console.log(price + (price * 0.10))
        f_i = (price + (price * 0.10))
        console.log(f_i)
        $("#PRIX").html(f_i);
    } else if 
        (category == 12345) {

        f_i = (price + (price * 0.13))
        console.log(f_i)
    } else {
        console.log(category)


        f_i = (price + (price * 0.16))

    } $("#PRIX").html(f_i);

    }





    building_type = $("input[name='build type']:checked").val();
    console.log("building_type", building_type);
    category = $("input[name='cat type']:checked").val();
    console.log("category", category);

    if (building_type == 'corporate') {

        var total_occupation = (data["nb_occ"] * data["nb_floor"])
        console.log(data["nb_occ"])
        console.log("total_occupation", total_occupation);
        number_of_elevator = (total_occupation / 1000)
        console.log(number_of_elevator)
        var colonne = Math.ceil(data["nb_floor"] / 20)
        var number_of_elevator_total = Math.ceil(number_of_elevator / colonne)
        console.log(colonne, number_of_elevator_total)
        var neededCabs = Math.ceil(number_of_elevator_total * colonne)
        console.log(neededCabs)
        base_price = Math.ceil(neededCabs * category)
        price = base_price

    
          
    if (category == 7565) {

        console.log(price + (price * 0.10))
        f_i = (price + (price * 0.10))
        console.log(f_i)
        $("#PRIX").html(f_i);
    } else if 
        (category == 12345) {

        f_i = (price + (price * 0.13))
        console.log(f_i)
    } else {
        console.log(category)


        f_i = (price + (price * 0.16))

    } $("#PRIX").html(f_i); 

    }








    building_type = $("input[name='build type']:checked").val();
    console.log("building_type", building_type);
    category = $("input[name='cat type']:checked").val();
    console.log("category", category);

    if (building_type == 'hybrid') {

        total_occupation = (data["nb_occ"] * data["nb_floor"])
        console.log(data["nb_occ"])
        console.log("total_occupation", total_occupation);
        number_of_elevator = (total_occupation / 1000)
        console.log(number_of_elevator)
        colonne = Math.ceil(data["nb_floor"] / 20)
        number_of_elevator_total = Math.ceil(number_of_elevator / colonne)
        console.log(colonne, number_of_elevator_total)
        neededCabs = Math.ceil(number_of_elevator_total * colonne)
        console.log(neededCabs)
        base_price = Math.ceil(neededCabs * category)
        price = base_price

    
    
        if (category == 7565) {

            console.log(price + (price * 0.10))
            f_i = (price + (price * 0.10))
            console.log(f_i)
            $("#PRIX").html(f_i);
        } else if 
            (category == 12345) {
    
            f_i = (price + (price * 0.13))
            console.log(f_i)
        } else {
            console.log(category)
    
    
            f_i = (price + (price * 0.16))
    
        } $("#PRIX").html(f_i);
    }
}

function collect_data(data) {
    var building_type = $("input[name='build type']:checked").val();
    if (building_type == 'residential') {

        var nb_apart = $('#nb_apart').val();
        console.log("nb_apart", nb_apart);
        var nb_floor = $('#nb_floor').val();
        console.log("nb_floor", nb_floor);
        var nb_basement = $('#nb_basement').val();
        console.log("nb_basement", nb_basement);
    }

    if (building_type == 'commercial') {

        var nb_shop = $('#nb_shop').val();
        console.log("nb_shop", nb_shop);
        var nb_floor = $('#nb_floor').val();
        console.log("nb_floor", nb_floor);
        var nb_basement = $('#nb_basement').val();
        console.log("nb_basement", nb_basement);
        var nb_park = $('#nb_park').val();
        console.log("nb_park", nb_park);
        var nb_elevator = $('#nb_elevator').val();
        console.log("nb_elevator", nb_elevator);
    }

    if (building_type == 'corporate') {

        var nb_comp = $('#nb_comp').val();
        console.log("nb_comp", nb_comp);
        var nb_floor = $('#nb_floor').val();
        console.log("nb_floor", nb_floor);
        var nb_basement = $('#nb_basement').val();
        console.log("nb_basement", nb_basement);
        var nb_park = $('#nb_park').val();
        console.log("nb_park", nb_park);
        var nb_occ = $('#nb_occ').val();
        console.log("nb_occ", nb_occ);
    }
    if (building_type == 'hybrid') {

        var nb_shop = $('#nb_shop').val();
        console.log("nb_shop", nb_shop);
        var nb_floor = $('#nb_floor').val();
        console.log("nb_floor", nb_floor);
        var nb_basement = $('#nb_basement').val();
        console.log("nb_basement", nb_basement);
        var nb_park = $('#nb_park').val();
        console.log("nb_park", nb_park);
        var nb_occ = $('#nb_occ').val();
        console.log("nb_occ", nb_occ);
        var nb_ha = $('#nb_ha').val();
        console.log("nb_ha", nb_ha);
    }

    return {
        nb_shop: nb_shop,
        nb_floor: nb_floor,
        nb_basement: nb_basement,
        nb_park: nb_park,
        nb_elevator: nb_elevator,
        nb_ha: nb_ha,
        nb_occ: nb_occ,
        nb_comp: nb_comp,
        nb_apart: nb_apart
    }


}