$(document).ready(function() {
$("#blanks form").submit(function(event) {
    var item1 = $("input#item1").val();
    var item2 = $("input#item2").val();
    var item3 = $("input#item3").val();


    $("#blanks").hide();

    var grocery=[item1,item2,item3];

    grocery.sort();

    var newGrocery = grocery.map(function(grocer){
       return grocer.toUpperCase();
    });

    newGrocery.forEach(function(item){
    console.log(item);
    });

    for (var grocer = 0; grocer<newGrocery.length; grocer++){
        document.write("<li>" + newGrocery[grocer] + "</li>");
    }

  event.preventDefault();
    });
});
