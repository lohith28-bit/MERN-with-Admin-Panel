import img from '../../public/images/Login.png'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const URL = 'http://localhost:5000/api/auth/login';

export const Login = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		email: "",
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

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const response = await fetch(URL, {
				method: "POST",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(user)
			})

			console.log(response)
			if (response.ok) {
				setUser({
					email: '',
					password: ''
				})
			}
			navigate('/')

		} catch (error) {
			console.log("Login error :"), error
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
						Login
					</h2>
				</div>
				<br />
				<div className="form">
					<form onSubmit={handleSubmit}>
						<div>
							<div>
								<label>Email</label>
								<input type='email' required placeholder='Enter the Email' name='email'
									value={user.email}
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
							<button type='submit'> Login</button>
						</div>
					</form>
				</div>

			</div>
		</div>
	</>
}