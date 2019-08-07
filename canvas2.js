class CreateCanvas {
    constructor(canvasDiv, canvasWidth, canvasHeight) {
        this.draw = function() {
            this.canvasDiv = document.getElementById(canvasDiv);
            var canvas = document.createElement("canvas");
            var button = document.createElement("span");
            button.className = "mt-4";
            this.canvasWidth = canvas.setAttribute("width", canvasWidth);
            this.canvasHeight = canvas.setAttribute("height", canvasHeight);
            canvas.setAttribute("id", "canvas");
            this.canvasDiv.appendChild(canvas);
            this.canvasDiv.appendChild(button);
            if (typeof G_vmlCanvasManager != "undefined") {
                canvas = G_vmlCanvasManager.initElement(canvas);
            }
            var context = canvas.getContext("2d");
            context.font = "18px Arial";
            context.fillText("Signature :", 15, 40);

            $("#canvas").mousedown(function(e) {
                var mouseX = e.pageX - this.offsetLeft;
                var mouseY = e.pageY - this.offsetTop;

                paint = true;
                addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
                redraw();
            });

            $("#canvas").mousemove(function(e) {
                if (paint) {
                    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
                    redraw();
                }
            });

            $("#canvas").mouseup(function(e) {
                paint = false;
            });

            $("#canvas").mouseleave(function(e) {
                paint = false;
            });

            let clickX = new Array();
            let clickY = new Array();
            let clickDrag = new Array();
            let paint;
            let isSigned = 0;

            function addClick(x, y, dragging) {
                clickX.push(x);
                clickY.push(y);
                clickDrag.push(dragging);
            }

            function redraw() {
                context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

                context.strokeStyle = "#ce902a";
                context.lineJoin = "round";
                context.lineWidth = 3;
                for (let i = 0; i < clickX.length; i++) {
                    context.beginPath();
                    if (clickDrag[i] && i) {
                        context.moveTo(clickX[i - 1], clickY[i - 1]);
                        isSigned++;
                    } else {
                        context.moveTo(clickX[i] - 1, clickY[i]);
                    }
                    context.lineTo(clickX[i], clickY[i]);
                    context.closePath();
                    context.stroke();
                }
                console.log(isSigned);
            }
            button.innerHTML = "<a id=" + "resaBtn " + "class=" + "btn--shallow" + ">Réserver</a>";
            let isTimerOn = false;
            $("#resaBtn").click(function(e) {
                if (!isTimerOn && isSigned >= 1600) {
                    e.preventDefault();
                    $(".main__input-container-child").hide(400);
                    $("#canvas").hide(400);
                    document.querySelector(".canvasSignatureWarning").innerHTML = "Votre réservation à été effectuée";
                    const timer20min = new Timer(1200);
                    isTimerOn = true;
                } else if (!isTimerOn && isSigned <= 1600) {
                    document.querySelector(".canvasSignatureWarning").innerHTML =
                        "Veuillez signez ci-dessous s'il vous plait.";
                } else {
                    document.querySelector(".canvasSignatureWarning").innerHTML =
                        "Une reservation à deja été effectuée.<br>Celle-ci sera annulée.<br>Voulez vous effectuer une nouvelle réservation ?";
                    button.innerHTML = "<a id=" + "resaBtn " + "class=" + "btn--shallow" + ">Recommencer</a>";
                    $("#resaBtn").click(function(e) {
                        location.reload();
                    });
                }
            });
        };
    }
}
