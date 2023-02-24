const User = require('./User');
const Logs = require('./Logs');
const Workout = require('./Workout');

User.hasMany(Logs, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Check to see if the below association causes issues
Logs.belongsTo(User, {
    foreignKey: 'user_id'
});

Logs.hasMany(Workout, {
    foreignKey: 'log_id'
});

Workout.belongsToMany(Logs, {
    foreignKey: 'workout_id'
})

module.exports = { User, Logs, Workout };

