GoThemes.white.Plain.prototype.placeWhiteStone =
    function(ctx, shadow_ctx, stone, cx, cy, radius) {
        var color = this.getWhiteStoneColor();
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
console.log("[ogs flat style] done");
