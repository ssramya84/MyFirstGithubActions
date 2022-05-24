function chikkiSays(message) {
  let chikki = '(O.o)';

  if ( !message ) {
    return `${chikki} hellokitty?`;
  }

  return `${chikki} ${message}!`;
}

module.exports.chikkiSays = chikkiSays;
