(function () {
  let personer = [
    {
      navn: "Mikkel",
      alder: 17,
    },
    {
      navn: "Mathias",
      alder: 14,
    },
  ];

  let knap = document.getElementById("knap");
  let lst = document.getElementById("lst");
  knap.onclick = () => {
    for (var i = 0; i < personer.length; i++) {
      let li = document.createElement("li");
      li.innerHTML = personer[i].navn + " (" + personer[i].alder + ")";
      lst.appendChild(li);
    }
  };
})();
