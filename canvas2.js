class CreateNewCanvas {
    constructor(canvas, canvasWidth, canvasHeight) {
        this.canvas = document.getElementById(canvas);
        this.canvasWidth = this.canvas.setAttribute("width", canvasWidth);
        this.canvasHeight = this.canvas.setAttribute("height", canvasHeight);
        var canvas = document.getElementById(canvas);
        var button = document.createElement("span");
        var buttonClearCanvasBox = document.getElementById("sig-clearBtn-Box");
        var canvasContainer = document.querySelector(".canvas_container");
        var clearCanvasButton = document.createElement("button");
        canvasContainer.appendChild(button);
        button.className = "mt-4 mb-4";
        var ctx = canvas.getContext("2d");
        ctx.strokeStyle = "#222222";
        ctx.lineWidth = 2;

        var drawing = false;
        var mousePos = {
            x: 0,
            y: 0
        };
        var lastPos = mousePos;
        let isSigned = 0;
        this.drawing = function() {
            $("#sig-canvas").addClass("canvasClass");
            window.requestAnimFrame = (function(callback) {
                return (
                    window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimaitonFrame ||
                    function(callback) {
                        window.setTimeout(callback, 1000 / 60);
                    }
                );
            })();

            canvas.addEventListener(
                "mousedown",
                function(e) {
                    drawing = true;
                    lastPos = getMousePos(canvas, e);
                    isSigned = 85;
                    console.log(isSigned);
                },
                false
            );

            canvas.addEventListener(
                "mouseup",
                function(e) {
                    drawing = false;
                },
                false
            );

            canvas.addEventListener(
                "mousemove",
                function(e) {
                    mousePos = getMousePos(canvas, e);
                    isSigned++;
                    console.log(isSigned);
                    if (isSigned >= 100) {
                        document.querySelector(".canvasSignatureWarning").innerHTML =
                            "Signature accéptée.<br>Vous pouvez maintenant valider.";
                    } else {
                        return;
                    }
                },
                false
            );

            // Add touch event support for mobile
            canvas.addEventListener("touchstart", function(e) {}, false);

            canvas.addEventListener(
                "touchmove",
                function(e) {
                    var touch = e.touches[0];
                    var me = new MouseEvent("mousemove", {
                        clientX: touch.clientX,
                        clientY: touch.clientY
                    });
                    canvas.dispatchEvent(me);
                    isSigned = 100;
                    isSigned++;
                },
                false
            );

            canvas.addEventListener(
                "touchstart",
                function(e) {
                    mousePos = getTouchPos(canvas, e);
                    var touch = e.touches[0];
                    var me = new MouseEvent("mousedown", {
                        clientX: touch.clientX,
                        clientY: touch.clientY
                    });
                    canvas.dispatchEvent(me);
                },
                false
            );

            canvas.addEventListener(
                "touchend",
                function(e) {
                    var me = new MouseEvent("mouseup", {});
                    canvas.dispatchEvent(me);
                },
                false
            );

            function getMousePos(canvasDom, mouseEvent) {
                var rect = canvasDom.getBoundingClientRect();
                return {
                    x: mouseEvent.clientX - rect.left,
                    y: mouseEvent.clientY - rect.top
                };
            }

            function getTouchPos(canvasDom, touchEvent) {
                var rect = canvasDom.getBoundingClientRect();
                return {
                    x: touchEvent.touches[0].clientX - rect.left,
                    y: touchEvent.touches[0].clientY - rect.top
                };
            }

            function renderCanvas() {
                if (drawing) {
                    ctx.moveTo(lastPos.x, lastPos.y);
                    ctx.lineTo(mousePos.x, mousePos.y);
                    ctx.stroke();
                    lastPos = mousePos;
                }
            }

            // Prevent scrolling when touching the canvas
            document.body.addEventListener(
                "touchstart",
                function(e) {
                    if (e.target == canvas) {
                    }
                },
                false
            );
            document.body.addEventListener(
                "touchend",
                function(e) {
                    if (e.target == canvas) {
                    }
                },
                false
            );
            document.body.addEventListener(
                "touchmove",
                function(e) {
                    if (e.target == canvas) {
                    }
                },
                false
            );

            (function drawLoop() {
                requestAnimFrame(drawLoop);
                renderCanvas();
            })();

            function clearCanvas() {
                canvas.width = canvas.width;
            }

            // Add a reservation button below the canvas
            button.innerHTML = "<a id=" + "resaBtn " + "class=" + "btn--shallow" + ">Réserver</a>";
            buttonClearCanvasBox.appendChild(clearCanvasButton);
            clearCanvasButton.setAttribute("id", "sig-clearBtn");
            clearCanvasButton.className = "btn_clear_canvas";
            clearCanvasButton.innerHTML = "Effacer";

            let isCanvas = false;

            // Check if there's no other timer displayed and the minimum length required signature
            // -> Validate or not the booking

            $("#resaBtn").click(function(e) {
                if (!isCanvas && isSigned >= 100) {
                    e.preventDefault();
                    $(".main__input-container-child").hide(400);
                    $(".canvas_box").hide(200);
                    this.innerHTML = "Annuler";
                    document.querySelector(".canvasSignatureWarning").innerHTML = "Votre réservation à été effectuée.";
                    const timer20min = new Timer(1200);
                    $("#cancelResa").click(function(e) {
                        e.preventDefault();
                        clearInterval(timer20min.countdown);
                        document.querySelector(".display-timer").innerHTML = "Réservation annulée";
                        document.querySelector(".display-end_time").innerHTML = "";
                    });
                    isCanvas = true;
                } else if (!isCanvas && isSigned <= 100) {
                    document.querySelector(".canvasSignatureWarning").innerHTML =
                        "Veuillez signer ci-dessous s'il vous plait.";
                } else {
                    document.querySelector(".canvasSignatureWarning").innerHTML =
                        "Une reservation est en cours.<br>Celle-ci sera annulée.<br>Voulez-vous annuler ou effectuer une nouvelle réservation ?";
                    button.innerHTML =
                        "<a id=" + "resaBtn " + "class=" + "btn--shallow" + ">Annuler / Nouvelle réservation</a>";
                    $("#resaBtn").click(function(e) {
                        document.querySelector(".display-timer").innerHTML = "Reservation annulée";
                        document.querySelector(".display-end_time").innerHTML = "";
                        console.log("resaBtn clicked");
                        sessionStorage.clear();
                        location.reload();
                    });
                }
            });

            // Set up the UI

            var clearBtn = document.getElementById("sig-clearBtn");
            clearBtn.addEventListener(
                "click",
                function(e) {
                    clearCanvas();
                    isSigned = 0;
                    console.log(isSigned);
                    document.querySelector(".canvasSignatureWarning").innerHTML = "Vous pouvez signer à nouveau.";
                },
                false
            );
        };
    }
}
