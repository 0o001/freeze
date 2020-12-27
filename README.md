# freeze


```js
const objects = { a:1, b: { c: 3 } };

Object.freeze(objects);
objects.b.c = 2;
//output: '2' variable is not freeezed

freeze(objects)
objects.b.c = 3
//output: '3' but variable is freezed
objects.b.c
//output: 2
```
