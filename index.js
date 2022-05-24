function chikkiSays(message) {
  let chikki = '(o.o)';

  if ( !message ) {
    return `${chikki} hellokitty?`;
  }

  return `${chikki} ${message}`;
}

module.exports.chikkiSays = chikkiSays;
