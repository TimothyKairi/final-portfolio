var toggle, menu, close_btn;

toggle = document.getElementById("toggle")
menu = document.getElementById("menu")
close_btn = document.getElementById("close")


toggle.addEventListener("click", function(e)
{
    e.stopPropagation();
    e.preventDefault();

    menu.style.display = "block";
})


close_btn.addEventListener("click",function(e)
{

    e.stopPropagation();
    e.preventDefault();

    menu.style.display="none"
})
