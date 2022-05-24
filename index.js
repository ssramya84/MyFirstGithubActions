function chikkiSays(message) {
  let chikki = '(O.O)';

  if ( !message ) {
    return `${chikki} hellokitty!`;
  }

  return `${chikki} ${message}`;
}

module.exports.chikkiSays = chikkiSays;
