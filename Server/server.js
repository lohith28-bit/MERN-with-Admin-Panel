require('dotenv').config()
const express = require("express")
const app = express()
const cors = require('cors')
const auth_route = require('./router/auth-route')
const contact_route = require("./router/contact-route")
const connetDB = require('./utils/db')
const errorMiddleware = require('./middleware/error-middleware')

const corsOptions = {
	origin: 'http://localhost:5173',
	methods: 'GET, POST, PUT, DELETE, PATCH, HEAD',
	credentials: true
}

app.use(cors(corsOptions))
app.use(express.json())
app.use('/api/auth', auth_route)
app.use('/api/form', contact_route)
app.use(errorMiddleware)

const PORT = 5000

connetDB().then(
	app.listen(PORT, () => {
		console.log(`Server is running at PORT ${PORT}`);

	})
)
