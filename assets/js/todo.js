//Check off specific do-do's by clicking

    //adds the css class "completed" to the clicked li to add the strike through effect
$("ul").on("click", "li",function(){
    $(this).toggleClass("completed")
});

    //deltes the li if the span in it with the class ".delete-button" is clicked 
$("ul").on("click", ".delete-button",function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

    //on pressing the enter key new items are added
$(".new-item").keypress(function (event) { 
    if (event.which === 13) {
        let location = $(this).parent().find("ul");

        addLi(this.value, location);
        $(this).val("");
    }
});

    //add a new list
$("#new-list").keypress(function (event) { 
    if (event.which === 13) {
        $(".new").fadeOut();
        alert(this.value);
        $("body").append("<div class='container'><h1><span class='list'>" + this.value + "</span> <i class='fa fas fa-plus'></i></h1><input type='text' class='new' placeholder='Add New Todo'><ul class='list-item'></ul></div>");
        $(this).val("");
    }
});

    //this makes the add new items input box toggle on and off when the pluss sign is pressed
$("body").on("click", ".fa-plus", function() {
    let selectedList = $(this).parent().parent();
    $(this).parent().parent().find(".new").fadeToggle();
    $(this).parent().parent().find(".list-item").fadeIn();
    $(".list-item").not(selectedList.find(".list-item")).fadeOut();
    $(".new").not(selectedList.find(".new")).fadeOut();
});

    //toggles the list items in and out
$("body").on("click", ".list", function() {
    //TODO: make this dry code
    let selectedList = $(this).parent().parent().find(".list-item");
    $(".list-item").not(selectedList).fadeOut();
    selectedList.fadeToggle();
    $(".new").fadeOut();
});

    //creat new li elements and add conet to them then add them to the ul
function addLi(content, location){
    let newLi = document.createElement("li");
    let newSpan = document.createElement("span");

    newSpan.classList.add("delete-button");
    $(newSpan).append("<i class='fa fas fa-trash'></i>");

    $(newLi).append(newSpan);
    $(newLi).append(" " + content);


    location.append(newLi);

    // //this is being done using css
    // listeners(newLi);
}

//  //   //this is being done using css

// function listeners(theLi){
//     $(theLi).hover(function () {
//             $(this,  "span").find(".delete-button").toggleClass("hide");
            
//         }, function () {
//             $(this,  "span").find(".delete-button").toggleClass("hide");
//         }
//     );
// }

// listeners("li");
