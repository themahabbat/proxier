# Proxy-ChangeHandler
Javascript object, array change handler with Proxy API


## Usage
```js
import { proxier } from './proxier.js'

let object = {
  a: 5,
  b: 7
}

let getCallback = (target, property) => console.log(target, property)
let setCallback = (target, property, value, receiver) => console.log(target, property, value, receiver)

object = proxier(object, getCallback, setCallback )
```
