const User = require('../models/db_model')

const home = async (req, res) => {
	try {
		res.status(200).send("Its Home Page")
	}
	catch (error) {
		// res.status(500).send({
		// 	message: error.message || "Internal Server Error"
		// })
		next(error)
	}
}

const registration = async (req, res) => {
	try {
		const { username, email, phone, password } = req.body;

		const userExist = await User.findOne({ email })
		if (userExist) {
			return res.status(200).json({ message: "User already exist" })
		}

		const userCreated = await User.create({ username, email, phone, password })

		return res.status(201).json({
			message: "User registration successfull",
			token: await userCreated.generateToken(),
			userId: userCreated._id.toString()
		})
	}
	catch (error) {
		// return res.status(500).send({
		// 	message: error.message || "Internal Server Error"
		// })
		next(error)
	}
}


const login = async (req, res) => {
	try {
		const { email, password } = req.body;

		const userExist = await User.findOne({ email })

		if (!userExist) {
			return res.status(401).json({
				message: ' Invalid Credentials'
			})
		}

		const userValidPassword = await userExist.comparePassword(password)

		if (userValidPassword) {
			return res.status(200).json({
				message: "User login successfull",
				Token: await userExist.generateToken(),
				userID: userExist._id.toString()
			})
		} else {
			return res.status(401).json(
				{
					message: "Invalid Email or Password"
				})
		}

	} catch (error) {
		// return res.status(500).json({
		// 	message: error.message || "Internal Server Error"
		// })
		next(error)
	}
}

module.exports = { home, registration, login }