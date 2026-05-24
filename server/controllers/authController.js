const User = require('../models/User');

const register = async (req, res) => {
    try {
        const { name, phone, password } = req.body;

        const userExists = await User.findOne({ phone });

        if (userExists) {
            return res.status(400).json({
                message: 'User already exists'
            });
        }

        const user = await User.create({
            name,
            phone,
            password
        });

        res.status(201).json({
            _id: user._id,
            name: user.name,
            phone: user.phone
        });

    } catch (error) {
        res.status(500).json({
            message: 'Register failed'
        });
    }
};

const login = async (req, res) => {
    try {
        const { phone, password } = req.body;

        const user = await User.findOne({ phone });

        if (!user) {
            return res.status(400).json({
                message: 'User not found'
            });
        }

        if (user.password !== password) {
            return res.status(400).json({
                message: 'Wrong password'
            });
        }

        res.json({
            _id: user._id,
            name: user.name,
            phone: user.phone
        });

    } catch (error) {
        res.status(500).json({
            message: 'Login failed'
        });
    }
};

module.exports = {
    register,
    login
};