(function () {
  let knap = document.getElementById("knap");
  let sum = document.getElementById("sum");
  let tal1 = document.querySelectorAll("input.tal")[0];
  let tal2 = document.querySelectorAll("input.tal")[1];

  knap.onclick = () => {
    let t1 = parseInt(tal1.value);
    let t2 = parseInt(tal2.value);
    let s = t1 + t2;
    sum.innerHTML = s;
  };
})();
