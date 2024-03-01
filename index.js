
// for (let i = 0; i < 6; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color = "blue";
//     });
// }

// $("button").click(function(){
//     $("h1").css("color","purple");
// });

$("input").keypress(function(event){


    $("h1").text(event.key);
});