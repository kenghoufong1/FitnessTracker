const router = require('express').Router();
const { Workout } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const workoutData = await Workout.findAll();
        res.status(200).json(workoutData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const workoutData = await Workout.findByPk(req.params.id);
        if (!workoutData) {
            res.status(404).json({ message: 'No workouts found with this id!' })
            return;
        }
        res.status(200).json(workoutData);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;