var placeStoneFn = function(color) {
    return function(ctx, shadow_ctx, stone, cx, cy, radius) {
        let lineWidth = radius * 0.10;
        if (lineWidth < 0.3) {
            lineWidth = 0;
        }
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        if (lineWidth > 0) {
            ctx.lineWidth = lineWidth;
        }
        ctx.beginPath();
        ctx.arc(cx, cy, radius - lineWidth / 2, 0.001, 2 * Math.PI, false); /* 0.001 to workaround fucked up chrome bug */
        if (lineWidth > 0) {
            ctx.stroke();
        }
        ctx.fill();
    };
};

var lightGreen = "#1ABC9C";
var lineColor = "#847330"
var white = 'hsl(0, 0%, 95%)';
var black = 'hsl(0, 0%, 20%)';

GoThemes.board.Plain.prototype.getLineColor = function() { return lineColor; }
GoThemes.board.Plain.prototype.getStarColor = function() { return lineColor; }
GoThemes.white.Plain.prototype.placeWhiteStone = placeStoneFn(white);
GoThemes.black.Plain.prototype.placeBlackStone = placeStoneFn(black);

document.body.classList.remove("light");
document.body.classList.remove("dark");
document.getElementsByClassName("chat-log")[0].style.backgroundColor = lightGreen
document.body.style.backgroundColor = lightGreen;

console.log("[ogs flat style] done");
