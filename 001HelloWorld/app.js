(function () {
  let ov = document.getElementById("ov");
  let knap = document.querySelector("#knap");

  knap.onclick = () => {
    ov.innerHTML = "Hello world";
  };
})();
