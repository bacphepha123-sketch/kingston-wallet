import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {

    try {

        const { name, phone, password } = req.body

        const exist = await User.findOne({ phone })

        if (exist) {
            return res.status(400).json({
                message: 'Phone already exists'
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            phone,
            password: hashedPassword,
            balance: 0
        })

        const token = jwt.sign(
            { id: user._id },
            'kingstonsecret',
            { expiresIn: '7d' }
        )

        res.json({
            token,
            user
        })

    } catch (err) {

        console.log(err)

        res.status(500).json({
            message: 'Register failed'
        })

    }

}