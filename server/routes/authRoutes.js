const Transaction = require('../models/Transaction')

const express = require('express');

const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');

const {
    register,
    login,
    profile,
    addBank,
    deposit,
    withdraw,
    history
} = require('../controllers/authController');

router.post('/register', register);

router.post('/login', login);

router.get('/profile', authMiddleware, profile);

router.post('/add-bank', authMiddleware, addBank);

router.post('/deposit', authMiddleware, deposit);

router.post('/withdraw', authMiddleware, withdraw);

router.get('/history', authMiddleware, history);

module.exports = router;
router.get(
    '/transactions',
    authMiddleware,
    async (req, res) => {

        try {

            const transactions = await Transaction.find({
                userId: req.user.id
            }).sort({ createdAt: -1 })

            res.json(transactions)

        } catch (err) {

            res.status(500).json({
                message: 'Lỗi server'
            })

        }

    }
)
