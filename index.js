function shout(string) {
  return string.toUpperCase()
}

function sayHiToGrandma(string) {
  if (string === 'I love you, Grandma.') {
    return 'I love you, too.'
  }
  if (string === string.toUpperCase()) {
    return 'YES INDEED!'
  }
  
  if (string === string.toLowerCase()) {
    return "I can't hear you!"
  }
}

