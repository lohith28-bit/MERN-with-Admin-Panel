
const validator = (schema) => async (req, res, next) => {
	try {
		const parseBody = await schema.parseAsync(req.body)
		req.body = parseBody
		next()

	} catch (err) {
		// res.status(400).json({
		// 	message: err.errors[0].message
		// })
		const error = {
			status : 400,
			message : err.errors[0].message
		}
		next(error)
	}
}

module.exports = validator

