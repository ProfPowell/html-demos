let chars = "平成";
let annotation = "Heisei";
window.onload = function() {
  document.getElementById("output").innerHTML = `${chars}<rp>(</rp>
        <rt>${annotation}</rt>
      <rp>)</rp>`;
};

function handleCharacters() {
  chars = document.getElementById("input-characters").value;
  document.getElementById("output").innerHTML = `${chars}<rp>(</rp>
  <rt>${annotation}</rt>
  <rp>)</rp>`;
}
function handleAnnotation() {
  annotation = document.getElementById("input-annotation").value;
  document.getElementById("output").innerHTML = `${chars}<rp>(</rp>
  <rt>${annotation}</rt>
  <rp>)</rp>`;
}
