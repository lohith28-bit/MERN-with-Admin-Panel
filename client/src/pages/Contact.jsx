import img from '../../public/images/home.png'
import { useState } from 'react'

export const Contact = () => {
	const [user, setUser] = useState({
		username: "",
		email: "",
		message: ""
	})



	const handleChange = (e) => {
		let value = e.target.value
		let name = e.target.name;
		setUser({
			...user,
			[name]: value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(user)
	}

	return (
		<>
			<div>
				<div>
					<h1>Contacts</h1>
				</div>
				<div>
					<div>
						<img src={img} alt="photo" width="400px" />
					</div>
					<div>
						<form onSubmit={handleSubmit}>
							<div>
								<label>Username</label>
								<input type="text"
									placeholder='Enter username'
									name='username'
									value={user.username}
									onChange={handleChange}
									required
								/>
							</div>
							<div>
								<label>email</label>
								<input type="email" name="email" placeholder='Enter your email'
									value={user.email}
									onChange={handleChange}
									required
								/>
							</div>
							<div>
								<label>Message</label>
								<textarea name="message"
									placeholder='Please type your message' cols="30" rows="10"
									value={user.message}
									onChange={handleChange} />
							</div>
						<div>
							<button type='submit'>Submit</button>
						</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}