const Transaction = require('../models/Transaction');
const User = require('../models/User');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {

    try {

        const { phone, password } = req.body;

        const exist = await User.findOne({ phone });

        if (exist) {
            return res.status(400).json({
                message: 'Tài khoản đã tồn tại'
            });
        }

        const hash = await bcrypt.hash(password, 10);

        const user = await User.create({
            phone,
            password: hash
        });

        res.json({
            success: true,
            message: 'Đăng ký thành công',
            user
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

};

exports.login = async (req, res) => {

    try {

        const { phone, password } = req.body;

        const user = await User.findOne({ phone });

        if (!user) {
            return res.status(400).json({
                message: 'Tài khoản không tồn tại'
            });
        }

        const check = await bcrypt.compare(password, user.password);

        if (!check) {
            return res.status(400).json({
                message: 'Sai mật khẩu'
            });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET
        );

        res.json({
            success: true,
            token,
            user
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

};
exports.profile = async (req, res) => {

    try {

        const user = await User.findById(req.user.id);

        res.json(user);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

};
exports.addBank = async (req, res) => {

    try {

        const {
            bankName,
            bankNumber,
            bankOwner
        } = req.body;

        const user = await User.findById(req.user.id);

        user.bankName = bankName;

        user.bankNumber = bankNumber;

        user.bankOwner = bankOwner;

        await user.save();

        res.json({
            success: true,
            message: 'Thêm ngân hàng thành công',
            user
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

};
exports.deposit = async (req, res) => {

    try {

        const { amount } = req.body;

        const transaction = await Transaction.create({

            userId: req.user.id,

            type: 'deposit',

            amount

        });

        res.json({

            success: true,

            message: 'Tạo yêu cầu nạp tiền thành công',

            transaction

        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

};
exports.withdraw = async (req, res) => {

    try {

        const { amount } = req.body;

        const user = await User.findById(req.user.id);

        if (user.balance < amount) {

            return res.status(400).json({
                message: 'Số dư không đủ'
            });

        }

        user.balance -= amount;

        await user.save();

        const transaction = await Transaction.create({

            userId: req.user.id,

            type: 'withdraw',

            amount,

            status: 'success'

        });

        res.json({

            success: true,

            message: 'Rút tiền thành công',

            balance: user.balance,

            transaction

        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

};  
exports.history = async (req, res) => {

    try {

        const transactions = await Transaction.find({

            userId: req.user.id

        }).sort({

            createdAt: -1

        });

        res.json(transactions);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

};