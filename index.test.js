const { chikkiSays } = require('./');

test('chikki knows what to say', () => {
  expect(chikkiSays('helloooo!')).toBe('(o.o) helloooo!');
});

test('chikki is not sure what to say', () => {
  expect(chikkiSays()).toBe('(o.o) hellokitty?');
});
