# Regnemaskine

Med udgangspunkt i følgende HTML hvor der er oprettet to tekstbokse og en knap

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM Opgaver</title>
    <style>
      table tr td:first-child {
        width: 100px;
      }
    </style>
  </head>

  <body>
    <table>
      <tr>
        <td>1. tal</td>
        <td><input class="tal" type="text" value="0" /></td>
      </tr>
      <tr>
        <td>2. tal</td>
        <td><input class="tal" type="text" value="0" /></td>
      </tr>
      <tr>
        <td colspan="2">
          <button id="knap">Beregn</button>
        </td>
      </tr>
      <tr>
        <td>Sum</td>
        <td id="sum"></td>
      </tr>
    </table>

    <script src="app.js"></script>
  </body>
</html>
```

og følgende javascript:

```js
(function () {

// kode

})();

```

skal du skabe en "regnemaskine" som når der klikkes på knappen lægger to tal sammen fra de to tekstbokse, og skriver resultatet i td#sum.

Du kan evt

- finde de to tekstbokse ved hjælp af querySelectorAll(".tal") - men husk der returneres et array
- finde indholdet i en tekstboks ved hjælp af value-egenskaben

Se eventuelt min [løsning](../app.js)