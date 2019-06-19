import React, { Component } from 'react';
import './../../public/css/login.css';
import { getUser } from '../../services/auth'
import '../../public/css/jquery.fancybox.min.css';

class Login extends Component {
	state = {
		dataLogin: {
			username: localStorage.username || "",
			password: localStorage.password || "",
		}
	}

	componentWillMount() {
		if (localStorage.length > 0) {
			window.location.href = '/';
		}
	}

	handleChangeData = (data) => {
		this.setState({
			dataLogin: {
				...this.state.dataLogin,
				...data,
			},			
		});
	}

	submitForm = async () =>{
		let dataForm = JSON.stringify(this.state.dataLogin);
		dataForm = JSON.parse(dataForm);
		let dataUser = await getUser(dataForm);
		 if(dataUser.length === 0){
			alert("Error Username or Password");
		 }else{
			localStorage.setItem('auth', dataUser[0].username);
			window.location.href = '/';
		 }
	}

  	render() {
		  
		return (
			<div>
				<div className="wrapper fadeInDown">
					<div id="formContent">
						<div className="fadeIn first">
							<h1>Login</h1>
						</div>
						<div className="form-groups d-flex form-email align-self-center b">
							<input
								type="text"
								className="fadeIn second form-control"
								name="username"
								placeholder="Username"
								value={this.state.dataLogin.username}
								onChange={(e) => this.handleChangeData({username: e.target.value})}
							/>
						</div>	
						<div className="form-groups">
							<input
								type="password"
								className="fadeIn third form-control"
								name="password"
								minLength="6"
								maxLength="16"
								placeholder="Password"
								value={this.state.dataLogin.password}
								onChange={(e) => this.handleChangeData({password: e.target.value})}
							/>
						</div>
						<div className="form-groups mt-2 mb-4">
							<button type="button"
							 className="fadeIn fourth btn-default m-0 w-100"
							 onClick = {this.submitForm}
							>
								Login
							</button>
						</div>
					</div>
				</div>
			</div>
		);
  	}
}

export default Login;
