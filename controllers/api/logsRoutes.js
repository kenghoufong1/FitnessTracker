const router = require('express').Router();
const { Logs, Workout } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
      const logsData = await Logs.findAll({
        where: {
            user_id: req.session.user_id,
        },
        include: [{ model: Workout }],
      });
      res.status(200).json(logsData);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const logsData = await Logs.findByPk(req.params.id, {
            include: [{ model: Product }],
    });
        if (!logsData) {
            res.status(404).json({ message: 'No logs found with this id!' })
            return;
        }
        res.status(200).json(logsData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newLogs = await Logs.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newLogs);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        logsData = await Logs.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }
        );
        if (!logsData) {
            res.status(404).json({ message: 'No logs found with this id!' });
            return;
        }
        res.status(200).json(logsData);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const logsData = await Logs.destroy({
            where: {
            id: req.params.id,
            user_id: req.session.user_id,
            },
    });
    if (!logsData) {
        res.status(404).json({ message: 'No logs found with this id!' });
        return;
    }
    res.status(200).json(logsData);
    } catch (err) {
        res.status(500).json(err);
    }
  });

  module.exports = router;