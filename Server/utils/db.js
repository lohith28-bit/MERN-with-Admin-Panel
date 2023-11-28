const mongoose = require('mongoose')

const URL = process.env.MONGODB_URI

const connetDB = async () => {
	try {
		await mongoose.connect(URL)
		console.log("Succefully connected Database")

	} catch(error) {
		console.error("Database connection Unsuccessfull")
	}
}

module.exports = connetDB