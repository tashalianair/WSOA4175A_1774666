dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
    var pos1= 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "divheader")) {
        //if present, the header is where you move the div from
        document.getElementById(elmnt.id + "divheader").onmousedown = dragMouseDown;
    } else {
        //otherwise, move the div from anywhere inside the div
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        //get mouse cursor position at startup
        pos3 = e.clientX;
        pos4 = elementDrag.clientY;
        document.onmouseup = closeDragElement;
        //call a function whenever the cursor moves
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e =e || window.event;
        e.preventDefault();
        //calculate the new cursor position
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        //stop moving when mouse button is released
        document.onmouseup = null;
        document.onmousemove = null;
    }
}