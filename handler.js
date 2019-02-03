export const proxier = what => {

  let changeHandler = {
    get: function (target, property) {

      console.log(
        "GET =>      ",
        "object: " + JSON.stringify(target),
        "   ",
        "taken: " + property
      );

      // property is index in this case
      return target[property];
    },
    set: function (target, property, value, receiver) {

      console.log(
        "SET =>      ",
        JSON.stringify(target),
        "   ",
        "changed " + property,
        "to " + JSON.stringify(value)
      );

      target[property] = value;

      window.EventBus.stateChange(target.state._key)

      // you have to return true to accept the changes
      return true;
    }
  }

  return new Proxy(what, changeHandler)



}
