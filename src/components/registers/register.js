import React, { Component } from 'react';
import './../../public/css/login.css';

class Register extends Component {
	state = {
		dataRegister: {
			username: "",
			password: "",
			comfirmPassword: ""
		}
	}

	handleChangeData = (data) => {
		console.log(data);
		this.setState({
			dataRegister: {
				...this.state.dataRegister,
				...data,
			},			
		});
	}

	submitForm = async () =>{
		
		let dataForm = JSON.stringify(this.state.dataRegister);
		dataForm = JSON.parse(dataForm);
		console.log(dataForm, "sadsad");
		if(dataForm.password === dataForm.comfirmPassword){
			console.log("s");
		}else{
			alert("Password not matched");
		}
		// // let dataUser = await getUser(dataForm);
		// if(dataUser.length === 0){
		// 	alert("Error Username or Password");
		// }else{
		// 	localStorage.setItem('auth', dataUser[0].username);
		// 	window.location.href = '/';
		// }
	}

  	render() {
		  
		return (
			<div>
				<div className="wrapper fadeInDown">
					<div id="formContent">
						<div className="fadeIn first">
							<h1>Registes</h1>
						</div>
						<div className="form-groups d-flex form-email align-self-center b">
							<input
								type="text"
								className="fadeIn second form-control"
								name="username"
								placeholder="Username"
								value={this.state.dataRegister.username}
								onChange={(e) => this.handleChangeData({username: e.target.value})}
							/>
						</div>	
						<div className="form-groups d-flex form-email align-self-center b">
							<input
								type="password"
								className="fadeIn third form-control"
								name="password"
								minLength="6"
								maxLength="16"
								placeholder="Password"
								value={this.state.dataRegister.password}
								onChange={(e) => this.handleChangeData({password: e.target.value})}
							/>
						</div>
						<div className="form-groups d-flex form-email align-self-center b">
							<input
								type="password"
								className="fadeIn third form-control"
								name="password"
								minLength="6"
								maxLength="16"
								placeholder="Comfirm Password"
								value={this.state.dataRegister.comfirmPassword}
								onChange={(e) => this.handleChangeData({comfirmPassword: e.target.value})}
							/>
						</div>
						<div className="form-groups mt-2 mb-4">
							<button type="button"
							 className="fadeIn fourth btn-default m-0 w-100"
							 onClick = {this.submitForm}
							>
								Register
							</button>
						</div>
					</div>
				</div>
			</div>
		);
  	}
}

export default Register;