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

GoThemes.white.Plain.prototype.placeWhiteStone = placeStoneFn(this.getWhiteStoneColor());
GoThemes.black.Plain.prototype.placeBlackStone = placeStoneFn(this.getBlackStoneColor());
console.log("[ogs flat style] done");
