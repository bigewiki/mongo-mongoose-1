const assert = require('assert');
const User = require('../src/user');

const createRecord = () => {
  describe('Creating records', () => {
    it('saves a user', (done) => {
      const joe = User({ name: 'Joe' });

      joe.save()
      .then(() => {
        //has joe ben saved successfully?
        assert(!joe.isNew);
        done();
      });
    });
  });
}

createRecord();
