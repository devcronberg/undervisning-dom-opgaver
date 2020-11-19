# Opret en liste

Med udgangspunkt i følgende HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM Opgaver</title>
  </head>
  <body>
    <button id="knap">Klik på mig</button>
    <ul id="lst"></ul>    
    <script src="app.js"></script>
  </body>
</html>
```

og følgende javascript 

```js
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

  // kode

})();
```

skal du skrive kode således, at et klik på knappen danner en liste (samling af li'er) placeret i ```lst``` med teksten:

- Mikkel (17 år)
- Mathias (14 år)

Du kan evt

- bruge document.createElement til at oprette en li, og dens innerHTML til at tilføje tekst
- bruge ul-elementets appendChild til at tilføje hver enkelt li

Se eventuelt min [løsning](../app.js)