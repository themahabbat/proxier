export const proxier = (what, getCallback = null, setCallback = null) => {

  let changeHandler = {
    get: function (target, property) {

      if (getCallback) getCallback(target, property)

      // property is index in this case
      return target[property];
    },
    set: function (target, property, value, receiver) {

      if (setCallback) setCallback(target, property, value, receiver)


      target[property] = value;

      // you have to return true to accept the changes
      return true;
    }
  }

  return new Proxy(what, changeHandler)

}
