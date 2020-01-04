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

    //on pressing the enter key event happens
$("#new").keypress(function (event) { 
    if (event.which === 13) {
        addLi(this.value);
        $(this).val("");
    }
    
});

    //this makes the add new items input box toggle on and off when the pluss sign is pressed
$(".fa-plus").click(function() { 
    $("#new").fadeToggle();
    $("#to-do-list").fadeIn();
});

$(".list").click(function(){
    $("#to-do-list").fadeToggle();
    $("#new").fadeOut();
});

    //creat new li elements and add conet to them then add them to the ul
function addLi(content){
    let newLi = document.createElement("li");
    let newSpan = document.createElement("span");

    newSpan.classList.add("delete-button");
    $(newSpan).append("<i class='fa fas fa-trash'></i>");

    $(newLi).append(newSpan);
    $(newLi).append(" " + content);

    $("ul").append(newLi);

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
