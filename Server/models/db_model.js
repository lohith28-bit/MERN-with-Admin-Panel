const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		require: true
	},
	email: {
		type: String,
		require: true,
	},
	phone: {
		type: String,
		require: true
	},
	password: {
		type: String,
		require: true
	},
	isAdmin: {
		type: Boolean,
		default: false
	}
})

userSchema.pre('save', async function (next) {

	const user = this;

	if (!user.isModified('password')) {
		next()
	}

	try {
		const saltRound = await bcrypt.genSalt(10);
		const hashpassword = await bcrypt.hash(user.password, saltRound);
		user.password = hashpassword
	} catch (error) {
		next(error)
	}
})

userSchema.methods.generateToken = async function () {
	try {
		return jwt.sign(
			{
				userId: this._id.toString(),
				email: this.email,
				isAdmin: this.isAdmin
			},
			process.env.JWT_SECRET_KEY,
			{
				expiresIn: '30d'
			})
	} catch (error) {
		// console.error(error.message)
		next(error)
	}
}

userSchema.methods.comparePassword = async function (enteredPass) {
	try {
		return bcrypt.compare(enteredPass, this.password)

	} catch (error) {
		// console.error(error.message)
		next(error)
	}
}

const User = new mongoose.model('User', userSchema)


module.exports = User