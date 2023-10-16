const element = document.getElementById("ajs");

const ChangeColorAfterDelay = function () {
    element.style.backgroundColor = "yellow";
};

setTimeout(ChangeColorAfterDelay, 4000);
