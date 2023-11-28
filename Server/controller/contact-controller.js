const Contact = require('../models/contact-model')

const contact = async (req, res) => {
	try {

		const response = req.body;
		Contact.create(response);
		return res.status(201).json({ message: "Message was sent successfully"})

	} catch (error) {
		next(error)
	}
}

module.exports = contact