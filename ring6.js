export function drawRing6(ctx){
    const cx = 300, cy = 300;
    const radius = 300;

    ctx.strokeStyle = "#f90";
    ctx.lineWidth = 4;

    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI*2);
    ctx.stroke();

    ctx.fillStyle = "#f90";
    ctx.font = "20px monospace";
    ctx.fillText("Ring‑6 (Meta)", cx - 80, cy - radius - 10);
}
