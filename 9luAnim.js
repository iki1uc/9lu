export function animate9lu(ctx){
    const cx = 300, cy = 300;
    let t = 0;

    function loop(){
        ctx.clearRect(0,0,600,600);

        ctx.fillStyle = "#111";
        ctx.fillRect(0,0,600,600);

        for(let i=0;i<9;i++){
            const radius = 40 + i*25 + Math.sin(t + i)*5;

            ctx.strokeStyle = `hsl(${i*40}, 80%, 60%)`;
            ctx.lineWidth = 3;

            ctx.beginPath();
            ctx.arc(cx, cy, radius, 0, Math.PI*2);
            ctx.stroke();
        }

        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(cx, cy, 12 + Math.sin(t)*2, 0, Math.PI*2);
        ctx.fill();

        t += 0.05;
        requestAnimationFrame(loop);
    }

    loop();
}
