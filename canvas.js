window.addEventListener("load", () => {
    canvas = document.querySelector("#canvas");
    ctx = canvas.getContext("2d");
    painting = false;

    // Resizing

    canvas.height = window.innerHeight / 3;
    canvas.width = window.innerWidth / 3;

    // Variable

    function startPosition() {
        painting = true;
    }

    function finishedPosition() {
        painting = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!painting) return;
        ctx.lineWidth = 2;
        // ctx.lineCap = "round";
        ctx.lineTo(e.clientX / 3, e.clientY / 3);
        ctx.stroke();
    }

    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);
});
