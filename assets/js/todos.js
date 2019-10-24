// $("li").click(function() {
//     if ($(this).css("color") == "rgb(33, 37, 41)") $(this).css({"color": "grey", "text-decoration": "line-through"})
//     else $(this).css({"color": "rgb(33, 37, 41)", "text-decoration": "none"})
// })

$("ul").on("click", "li", function() {
    $(this).toggleClass("completed")
})

$("ul").on("click", "li span", function(e) {
    e.stopPropagation()
    $(this).parent().fadeOut(500, function(){$(this).remove()})
})

$("input[type='text']").keypress(function(e) {
    if (e.which == 13) {
        let todoText = $(this).val()
        $("ul").append(`<li>${todoText} <span><i class="fa fa-trash"></i></span></li>`)
    }
})