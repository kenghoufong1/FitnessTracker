const User = require('./User');
const Log = require('./Log');
const Workout = require('./Workout');

User.hasMany(Log, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Check to see if the below association causes issues
Log.belongsTo(User, {
    foreignKey: 'user_id'
});

Log.hasMany(Workout, {
    foreignKey: 'log_id'
});

Workout.belongsTo(Log, {
    foreignKey: 'workout_id'
})

module.exports = { User, Log, Workout };

