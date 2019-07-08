window.addEventListener("load", () => {
  canvas = document.querySelector("#canvas");
  ctx = canvas.getContext("2d");
  painting = false;

  // Resizing

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  //console.log(ctx);

  //ctx.strokeStyle = "red";
  //ctx.lineWidth = 5;
  //ctx.strokeRect(100, 100, 200, 200);
  //
  //ctx.strokeStyle = "blue";
  //ctx.lineWidth = 2;
  //ctx.strokeRect(200, 200, 200, 200);
  //
  //ctx.beginPath();
  //ctx.moveTo(400, 100);
  //ctx.lineTo(500, 100);
  //ctx.lineTo(500, 150);
  //ctx.closePath();

  //ctx.stroke();

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
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
  }

  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);
});
