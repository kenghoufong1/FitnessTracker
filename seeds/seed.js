const sequelize = require('../config/connection');
const { User, Log , Workout } = require('../models');

const userData = require('./userData.json');
const logData = require('./logData.json');
// const workoutData = require('./workoutData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Log.bulkCreate(logData, {
    individualHooks: true,
    returning: true
  })

  process.exit(0);
};

seedDatabase();
