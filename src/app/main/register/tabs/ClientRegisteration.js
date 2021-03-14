import { TextFieldFormsy } from '@fuse/core/formsy';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import InputAdornment from '@material-ui/core/InputAdornment';
import Formsy from 'formsy-react';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitRegister } from 'app/auth/store/registerSlice';
import TextField from '@material-ui/core/TextField';
import { useForm } from '@fuse/hooks';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function ClientRegisteration(props) {
	const dispatch = useDispatch();
	const { form, handleChange, resetForm } = useForm({
		email: '',
		name:'',
		password: '',
		confirmPassword: ''
	});
	// const register = useSelector(({ auth }) => auth.register);

	const [isFormValid, setIsFormValid] = useState(false);
	const formRef = useRef(null);

	// useEffect(() => {
	// 	if (register.error && (register.error.username || register.error.password || register.error.email)) {
	// 		formRef.current.updateInputsWithError({
	// 			...register.error
	// 		});
	// 		disableButton();
	// 	}
	// }, [register.error]);

	function disableButton() {
		setIsFormValid(false);
	}

	function enableButton() {
		setIsFormValid(true);
	}

	function handleSubmit() {
		// dispatch(submitRegister(model));
	}

	return (
		<div className="w-full">
			<form
							name="loginForm"
							noValidate
							className="flex flex-col justify-center w-full"
							onSubmit={handleSubmit}
						>
							<TextField
								className="mb-16"
								label="Name"
								autoFocus
								type="text"
								name="name"
								value={form.name}
								onChange={handleChange}
								variant="outlined"
								required
								fullWidth
							/>
								<TextField
								className="mb-16"
								label="Email"
								type="email"
								name="email"
								value={form.email}
								onChange={handleChange}
								variant="outlined"
								required
								fullWidth
							/>

							<TextField
								className="mb-16"
								label="Password"
								type="password"
								name="password"
								value={form.password}
								onChange={handleChange}
								variant="outlined"
								required
								fullWidth
							/>
								<TextField
								className="mb-16"
								label="Confirm Password"
								type="password"
								name="confirmPassword"
								value={form.confirmPassword}
								onChange={handleChange}
								variant="outlined"
								required
								fullWidth
							/>

					

							<Button
								variant="contained"
								color="primary"
								className="w-full mx-auto mt-16"
								aria-label="LOG IN"
								// disabled={!isFormValid()}
							>
								Register
							</Button>
						</form>
		</div>
	);
}

export default ClientRegisteration;
