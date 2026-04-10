//This may work outside of iFrames but could lead to bad displays
function toggleVisibleIFrame(elementID) {
    var element = document.getElementById(elementID);
    if (element.style.display == 'block') {
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
    }
}
