(function() {
    // custom place stone function for flat edges
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

    var turquoise = "#1ABC9C";
    var sea = "#16A085";
    var emerald = "#2ECC71";
    var nephritis = "#27AE60";

    var line = "#847330"
    var board = "#e4bb67"
    var white = 'hsl(0, 0%, 95%)';
    var black = 'hsl(0, 0%, 20%)';

    data.set("custom.black", black);
    data.set("custom.white", white);
    data.setDefault("custom.board", board);
    data.setDefault("custom.line", line);

    GoThemes.white.Plain.prototype.placeWhiteStone = placeStoneFn(white);
    GoThemes.black.Plain.prototype.placeBlackStone = placeStoneFn(black);

    // inject CSS
    const style = document.createElement('style');
    style.textContent = `
    div.MainGobanView {
        /* turquoise */
        background-color: #1ABC9C !important;
    }
    body.light div.Goban {
        box-shadow: none !important;
    }
    `;
    document.head.append(style);

    // click the theme selector which will trigger a redraw
    document.querySelector("div.theme-set div.selector").click();
})();