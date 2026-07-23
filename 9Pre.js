<script type="module">
import { MATRIX_9LU, find9lu, prefetch9lu, impulse9lu } from "./9lu.iqq.js";

document.getElementById("9lu").innerText =
  "9lu: SOLO‑MOVE aktiv → " + impulse9lu("lu‑1").join(" / ");

document.getElementById("3te").innerText =
  "3te: SUPPORT‑MOVE aktiv → O‑Ebene";

document.getElementById("on3").innerText =
  "SEEÜ: sieht 9lu + 3te → " + find9lu("lu1");
</script>
