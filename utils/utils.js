const Utils = {
  objectOmit: (obj, omitKey) => {
    console.log(Object.keys(obj))
    return Object.keys(obj).reduce((result, key) => {
      if (key !== omitKey) {
        result[key] = obj[key]
      }
      return result
    }, {})
  },
}

module.exports = Utils
