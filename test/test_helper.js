const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/users_test', { useNewUrlParser: true });

mongoose.connection
  .once('open', () => {})
  .on('error', (error) => {
    console.warn('Warning', error);
  });

beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    // Ready to run next test
    done();
  });
});
