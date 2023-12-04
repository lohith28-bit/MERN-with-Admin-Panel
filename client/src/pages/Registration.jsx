import img from '../../public/images/register.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URL = 'http://localhost:5000/api/auth/login';


export const Registration = () => {
	const [user, setUser] = useState({
		username: "",
		email: "",
		phone: "",
		password: ""
	})

	const handleChange = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		setUser({
			...user,
			[name]: value
		})
	}

	const navigate = useNavigate()
	const handleSubmit = async (e) => {

		try {
			e.preventDefault()
			const response = await fetch(URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(user)
			})
			console.log(response)
			if (response.ok) {
				setUser({
					username: "",
					email: "",
					phone: "",
					password: ""
				})
				navigate('/login')
			}
		} catch (error) {
			console.log("Register Error ", error)
		}
	}

	return <>
		<div className="container">
			<div className="image">
				<img src={img} alt="img" height='500rem' />
			</div>
			<div>
				<div>
					<h2>
						Registration
					</h2>
				</div>
				<br />
				<div className="form">
					<form onSubmit={handleSubmit}>
						<div>
							<div>
								<label>Username</label>
								<input type='text' required placeholder='Enter the name' name='username'
									value={user.username}
									onChange={handleChange}
								/>
							</div>
							<div>
								<label>Email</label>
								<input type='email' required placeholder='Enter the Email' name='email'
									value={user.email}
									onChange={handleChange}
								/>
							</div>
							<div>
								<label>Phone Number</label>
								<input type='number' required placeholder='Enter the name' name='phone'
									value={user.phone}
									onChange={handleChange}
								/>

							</div>
							<div>
								<label>Password</label>
								<input type='Password' required placeholder='Enter the Password' name='password'
									value={user.password}
									onChange={handleChange} />
							</div>
						</div>
						<br />
						<div>
							<button type='submit'> Register</button>
						</div>
					</form>
				</div>

			</div>
		</div>
	</>
}