# Hello World

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
    <h1 id="ov">Overskrift</h1>
    <button id="knap">Klik på mig</button>
    <script src="app.js"></script>
  </body>
</html>
```

og følgende app.js

```js
// en funktion som afvikler sig selv ved load
(function(){
  // kode
})();
```

skal du skrive kode således, at et klik på knappen ændrer overakriften til "Hello world".

Prøv

- brug document.getElementById for at finde overskriften
- brug document.querySelector for at finde knappen (css selector)
- tilføj ny funktionalitet til knappens onclick metode ```knap.onclick = function(){}``` (eller lambda)
- brug overskriftens ```innerHTML``` til at tilføje funktionalitet

Se eventuelt min [løsning](../app.js)