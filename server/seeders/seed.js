const db = require('../config/connection');
const { User, Question } = require('../models');
const userSeeds = require('./userSeeds.json');
const questionSeeds = require('./questionSeeds.json')

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Question.deleteMany({});
    await User.create(userSeeds);
    await Question.create(questionSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
