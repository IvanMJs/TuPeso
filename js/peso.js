document.getElementById("kgInput").addEventListener("input", function(e) {
  let kg = e.target.value;
  document.getElementById("gramosOutput").innerHTML = kg * 1000;
  document.getElementById("lbsOutput").innerHTML = kg * 2.205;
  document.getElementById("onzaOutput").innerHTML = kg * 35.274;
});
