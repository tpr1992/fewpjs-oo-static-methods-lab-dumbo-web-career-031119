class Formatter {
  //add static methods here

  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '')
   }


  // static titleize(arr) {
  //   let dontCapitalize = ['a', 'an', 'but', 'of', '']
  //   // if arr.includes('a' || 'an ||')
  // }

  static titleize(array) {
    let dontCapitalize = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let result = [];
    let arrayOfWords = array.split(' ')
    for (let i = 0; i < arrayOfWords.length; i++) {
      if (i === 0) {
        result.push(this.capitalize(arrayOfWords[i]))
      }
      else {
        if (dontCapitalize.includes(arrayOfWords[i])) {
          result.push(arrayOfWords[i])
        }
        else {
          result.push(this.capitalize(arrayOfWords[i]))
        }
      }
    }
    return result.join(' ');
  }
}
