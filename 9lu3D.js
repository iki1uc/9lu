export function draw9lu3D(ctx){
    const cx = 300, cy = 300;
    let t = 0;

    function loop(){
        for(let i=0;i<9;i++){
            const depth = Math.sin(t + i*0.4) * 20;
            const radius = 40 + i*25 + depth;

            ctx.strokeStyle = `rgba(${i*28}, ${150-depth}, 255, 0.8)`;
            ctx.lineWidth = 2 + depth/10;

            ctx.beginPath();
            ctx.arc(cx, cy, radius, 0, Math.PI*2);
            ctx.stroke();
        }

        t += 0.03;
        requestAnimationFrame(loop);
    }

    loop();
}
