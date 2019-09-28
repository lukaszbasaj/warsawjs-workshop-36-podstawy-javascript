**WarsawJS Workshop #36 - wprowadzenie do JavaScript**
> Instrukcje  warunkowe i pętle

Przełącz się na branch `04-conditional-statements-and-loops`

---

- Ćwiczenie 1

Używając `if...else`, napisz kod, który otrzymuje numer za pomocą monitu (`prompt()`) następnie wyświetli `alert`:  
  - 1, jeśli wartość jest większa od zera,  
  - -1, jeśli jest mniejsza niż zero, 
  - 0, jeśli jest równa zero. 

W tym zadaniu zakładamy, że dane wejściowe są zawsze liczbą.

---

- Ćwiczenie 2

Przepisz poniższą instrukcję warunkową używając operatora `?`.
```
let a = 1;
let b = 2;
let result;

if (a + b < 4) {
  result = 'Za mało';
} else {
  result = 'Za dużo';
}
```

---

- Ćwiczenie 3

Stwórz trzy zmienne: a = 4, b = 5, c = 6. Za pomocą instrukcji warunkowych sprawdź, która zmienna jest największa.

---

- Ćwiczenie 4

Przepisz poniższy kod, używając instrukcji `switch`:

```
let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}

```

---

- Ćwiczenie 5

Za pomocą pętli `for` wypisz w konsoli tekst
`******`

Gwiazdki powinny być w jednej linii. Skorzystaj tutaj z dodatkowej zmiennej, np. `let string`.


---

- Ćwiczenie 6

Za pomocą pętli `for` wypisz w konsoli tekst
`12345678910`


---


- Ćwiczenie 7 

Przepisz kod zmieniając pętlę `for` na `while` bez zmiany jego zachowania (wynik powinien pozostać taki sam).

```
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
```

---

- Ćwiczenie 8 

Używając pętli `for..of` przypisz imię dla każdego zwierzęcia
```
let animals = ['🐔', '🐷', '🐑', '🐇'];
let names = ['Gertrude', 'Henry', 'Melvin', 'Billy Bob'];
```
---

Ćwiczenie 9

Używając pętli `for..in` wypisz w konsoli wszystkie wartości, które są przypisane do właściwości obiektu `country`
```
country = {
    "name": "Poland",
    "alpha2Code": "PL",
    "capital": "Warsaw",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "population": 38437239,
}
```
