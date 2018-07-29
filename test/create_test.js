const assert = require('assert');
const User = require('../src/user');

const createRecord = () => {
  describe('Creating records', () => {
    it('saves a user', () => {
      const joe = User({ name: 'Joe' });

      joe.save();
    });
  });
}

createRecord();
