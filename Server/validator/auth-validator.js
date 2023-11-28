const z = require('zod')

const signupSchema = z.object({
	username: z
		.string({ required_error: "Name is required" })
		.trim()
		.min(4, { message: "Name must be atleast 4 character" })
		.max(255, { message: "Name must not be more than 255 characters" }),

	email: z
		.string({ required_error: "Email is required" })
		.trim()
		.email({ message: "Invalid Email address" }),

	phone: z
		.string({ required_error: "Phone number is required" })
		.min(10, { message: "Phone number must have 10 numbers" })
		.max(10, { message: "Phone number must have 10 numbers" }),

	password: z
		.string({ required_error: "Password is required" })
		.min(6, { message: "Password requires minimun of 6 characters" })

})

module.exports = signupSchema