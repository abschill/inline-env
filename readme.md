simple inline arg parser for node


```cmd
node index.js foo=bar
```

```js
import 'argenv';
console.log(process.env.foo)
// bar
```
or commonjs
```js
require('argenv');
console.log(process.env.foo)
// bar
```
