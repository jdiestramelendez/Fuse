import FuseAnimate from '@fuse/core/FuseAnimate';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import AboutTab from './tabs/AboutTab';
import PhotosVideosTab from './tabs/PhotosVideosTab';
import TimelineTab from './tabs/TimelineTab';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import { TextFieldFormsy } from '@fuse/core/formsy';
import Icon from '@material-ui/core/Icon';
import  { useEffect, useRef } from 'react';
import Formsy from 'formsy-react';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Card from '@material-ui/core/Card';
const useStyles = makeStyles(theme => ({
	layoutHeader: {
		height: 320,
		minHeight: 320,
		[theme.breakpoints.down('md')]: {
			height: 240,
			minHeight: 240
		}
	}
}));

function ProfilePage() {
	const classes = useStyles();
	const [selectedTab, setSelectedTab] = useState(0);
	const [isFormValid, setIsFormValid] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [showForm, setShowForm] = useState(true)
	const formRef = useRef(null);
	function handleTabChange(event, value) {
		setSelectedTab(value);
	}
	function handleEdit() {
		setShowForm(false)
	console.log("edit")
	}
	function handleSubmit() {
		console.log("submit")
		}

	return (
		<FusePageSimple
			classes={{
				header: classes.layoutHeader,
				toolbar: 'min-h-56 h-56 items-end'
			}}
			header={
				<div className="p-24 flex flex-1 flex-codisableRipple l md:flex-row md:items-end">
					<div className="row w-full">
						<div className="col-lg-2">
							<div className="row">
							<div className="col-lg-12">
							<FuseAnimate animation="transition.expandIn" delay={300}>
							<Avatar className="w-96 h-96" src="assets/images/avatars/Velazquez.jpg" />
							</FuseAnimate>
								</div>
								<div className="col-lg-12 ml-24">
								<IconButton onClick={() => setShowPassword(!showPassword)}>
								<CameraAltIcon/>
								</IconButton>

							
								</div>
							</div>
							</div>
							<div className="col-lg-9 mt-48 p-0">
								<div className="row">
									<div className="col-lg-6 p-0">
									<FuseAnimate animation="transition.slideLeftIn" delay={300}>
										<Typography
											className="md:mx-24 text-24 md:text-32 my-8 md:my-0"
											variant="h4"
											color="inherit"
										>
											John Doe
										</Typography>
									</FuseAnimate>
									</div>
								</div>
								<div className="row p-0">
									<div className="col-lg-6 p-0 mt-12">
									<FuseAnimate animation="transition.slideLeftIn" delay={300}>
										<Typography
											className="md:mx-24 text-18 md:text-18 my-8 md:my-0"
											variant="h4"
											color="inherit"
										>
											JohnDoe321@gmail.com
										</Typography>
									</FuseAnimate>
									</div>
								</div>	
							</div>
					</div>

		
			
					

					

					{/* <div className="flex items-center justify-end">
						<Button className="mx-8" variant="contained" color="secondary" aria-label="Follow">
							Follow
						</Button>
						<Button variant="contained" color="primary" aria-label="Send Message">
							Send Message
						</Button>
					</div> */}
				</div>
			}

	content={
		<div className="">
		<div className="flex flex-1 flex-codisableRipple l md:flex-row my-16 h-52 items-center  justify-between" style={{ width:'97%'}}>
		<Card className="flex w-full  justify-between mb-28">
		<div className="widget DashboardCards p-16">
					<Icon className="text-32 pt-8 h-40" color="action">
					content_copy
							</Icon>
					<Typography className="h3 pt-16" color="textSecondary">
						My Policies
					</Typography>

					<div className="CircleDiv">
					<Typography className="h5" color="textSecondary">
						12
					</Typography>
					</div>
				</div>
		<div className="widget DashboardCards p-16">
					<Icon className="text-32 pt-8 h-40" color="action">
					star
							</Icon>
					<Typography className="h3 pt-16" color="textSecondary">
						My Certficates
					</Typography>

					<div className="CircleDiv">
					<Typography className="h5" color="textSecondary">
						12
					</Typography>
					</div>
				</div>
		<div className="widget DashboardCards p-16">
					<Icon className="text-32 pt-8 h-40" color="action">
					insights
							</Icon>
					<Typography className="h3 pt-16" color="textSecondary">
						Installments
					</Typography>

					<div className="CircleDiv">
					<Typography className="h5" color="textSecondary">
						12
					</Typography>
					</div>
				</div>
		<div className="widget DashboardCards p-16">
					<Icon className="text-32 pt-8 h-40" color="action">
					monetization_on
							</Icon>
					<Typography className="h3 pt-16" color="textSecondary">
						Premiums
					</Typography>

					<div className="CircleDiv">
					<Typography className="h5" color="textSecondary">
						12
					</Typography>
					</div>
				</div>
		</Card>
		</div>
		{showForm ? 
		<div className="w-full">
			<Formsy
				// onValidSubmit={handleSubmit}
				// onValid={enableButton}
				// onInvalid={disableButton}
				ref={formRef}
				className="row w-full"
			>
				<div className="col-lg-6">
				<TextFieldFormsy
					className="mb-16 w-full"
					type="text"
					name="name"
					label="Name"
					value="saqib"
					validations={{
						minLength: 4
					}}
					validationErrors={{
						minLength: 'Min character length is 4'
					}}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<Icon className="text-20" color="action">
									person
								</Icon>
							</InputAdornment>
						)
					}}
					variant="outlined"
					disabled
				/>
				</div>
				<div className="col-lg-6">
				
				<TextFieldFormsy
					className="mb-16 w-full"
					type="text"
					name="email"
					label="Email"
					value="saqibbutt@gmail.com"
					validations={{
						minLength: 4
					}}
					validationErrors={{
						minLength: 'Min character length is 4'
					}}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<Icon className="text-20" color="action">
									email
								</Icon>
							</InputAdornment>
						)
					}}
					variant="outlined"
					disabled
				/>

				</div>
				<div className="col-lg-6">
				
				<TextFieldFormsy
					className="mb-16 w-full"
					type="text"
					name="contact"
					label="Contact"
					value="03125855132"
					validationErrors= 'Min character length is 4'
					
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<Icon className="text-20" color="action">
								contact_phone
								</Icon>
							</InputAdornment>
						)
					}}
					variant="outlined"
					disabled
				/>

				</div>
				<div className="col-lg-6">
				<TextFieldFormsy
					className="mb-16 w-full"
					type="text"
					name="contact2"
					label="Contact 2"
					value="03421568810"
					validationErrors= 'Min character length is 4'
					
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<Icon className="text-20" color="action">
								contact_phone
								</Icon>
							</InputAdornment>
						)
					}}
					variant="outlined"
					disabled
				/>

				</div>
				<div className="col-lg-6">
				
				<TextFieldFormsy
					className="mb-16 w-full"
					type="password"
					name="password"
					label="Password"
					value="admin"
					validations={{
						minLength: 4
					}}
					validationErrors={{
						minLength: 'Min character length is 4'
					}}
					InputProps={{
						className: 'pr-2',
						type: showPassword ? 'text' : 'password',
						endAdornment: (
							<InputAdornment position="end">
								<IconButton onClick={() => setShowPassword(!showPassword)}>
									<Icon className="text-20" color="action">
										{showPassword ? 'visibility' : 'visibility_off'}
									</Icon>
								</IconButton>
							</InputAdornment>
						)
					}}
					variant="outlined"
					disabled
				/>

				</div>
				<div className="col-lg-6">
				
				<TextFieldFormsy
					className="mb-16 w-full"
					type="password"
					name="confPassword"
					label="Confirm Password"
					value="admin"
					validations={{
						minLength: 4
					}}
					validationErrors={{
						minLength: 'Min character length is 4'
					}}
					InputProps={{
						className: 'pr-2',
						type: showPassword ? 'text' : 'password',
						endAdornment: (
							<InputAdornment position="end">
								<IconButton onClick={() => setShowPassword(!showPassword)}>
									<Icon className="text-20" color="action">
										{showPassword ? 'visibility' : 'visibility_off'}
									</Icon>
								</IconButton>
							</InputAdornment>
						)
					}}
					variant="outlined"
					disabled
				/>

				</div>
				<div className="col-lg-12">
				
				<TextFieldFormsy
					className="mb-16 w-full"
					type="text"
					name="address"
					label="Address"
					value=""
					validationErrors= 'Min character length is 4'
					
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<Icon className="text-20" color="action">
									home_work
								</Icon>
							</InputAdornment>
						)
					}}
					variant="outlined"
					disabled
				/>

				</div>
				<div className="col-lg-6"/>
				<div className="col-lg-2"/>
				<div className="col-lg-4 flex justify-end mb-16">
				<Button
				
					variant="contained"
					color="secondary"
					className="w-1\/4  mt-16"
					aria-label="LOG IN"
					value="legacy"
					onClick={handleEdit}
				>
					Edit
				</Button>
				<Button
			
					variant="contained"
					color="primary"
					className="w-1\/4  mt-16 ml-16"
					aria-label="LOG IN"
					value="legacy"
				>
					Cancel
				</Button>

				</div>


		
			</Formsy>
		</div>
		:<div className="w-full">
		<Formsy
			// onValidSubmit={handleSubmit}
			// onValid={enableButton}
			// onInvalid={disableButton}
			ref={formRef}
			className="row w-full"
		>
			<div className="col-lg-6">
			<TextFieldFormsy
				className="mb-16 w-full"
				type="text"
				name="name"
				label="Name"
				value="saqib"
				validations={{
					minLength: 4
				}}
				validationErrors={{
					minLength: 'Min character length is 4'
				}}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<Icon className="text-20" color="action">
								person
							</Icon>
						</InputAdornment>
					)
				}}
				variant="outlined"
				
			/>
			</div>
			<div className="col-lg-6">
			
			<TextFieldFormsy
				className="mb-16 w-full"
				type="text"
				name="email"
				label="Email"
				value="saqibbutt@gmail.com"
				validations={{
					minLength: 4
				}}
				validationErrors={{
					minLength: 'Min character length is 4'
				}}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<Icon className="text-20" color="action">
								email
							</Icon>
						</InputAdornment>
					)
				}}
				variant="outlined"
				
			/>

			</div>
			<div className="col-lg-6">
			
			<TextFieldFormsy
				className="mb-16 w-full"
				type="text"
				name="contact"
				label="Contact"
				value="03125855132"
				validationErrors= 'Min character length is 4'
				
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<Icon className="text-20" color="action">
							contact_phone
							</Icon>
						</InputAdornment>
					)
				}}
				variant="outlined"
				
			/>

			</div>
			<div className="col-lg-6">
			<TextFieldFormsy
				className="mb-16 w-full"
				type="text"
				name="contact2"
				label="Contact 2"
				value="03421568810"
				validationErrors= 'Min character length is 4'
				
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<Icon className="text-20" color="action">
							contact_phone
							</Icon>
						</InputAdornment>
					)
				}}
				variant="outlined"
				
			/>

			</div>
			<div className="col-lg-6">
			
			<TextFieldFormsy
				className="mb-16 w-full"
				type="password"
				name="password"
				label="Password"
				value="admin"
				validations={{
					minLength: 4
				}}
				validationErrors={{
					minLength: 'Min character length is 4'
				}}
				InputProps={{
					className: 'pr-2',
					type: showPassword ? 'text' : 'password',
					endAdornment: (
						<InputAdornment position="end">
							<IconButton onClick={() => setShowPassword(!showPassword)}>
								<Icon className="text-20" color="action">
									{showPassword ? 'visibility' : 'visibility_off'}
								</Icon>
							</IconButton>
						</InputAdornment>
					)
				}}
				variant="outlined"
				
			/>

			</div>
			<div className="col-lg-6">
			
			<TextFieldFormsy
				className="mb-16 w-full"
				type="password"
				name="confPassword"
				label="Confirm Password"
				value="admin"
				validations={{
					minLength: 4
				}}
				validationErrors={{
					minLength: 'Min character length is 4'
				}}
				InputProps={{
					className: 'pr-2',
					type: showPassword ? 'text' : 'password',
					endAdornment: (
						<InputAdornment position="end">
							<IconButton onClick={() => setShowPassword(!showPassword)}>
								<Icon className="text-20" color="action">
									{showPassword ? 'visibility' : 'visibility_off'}
								</Icon>
							</IconButton>
						</InputAdornment>
					)
				}}
				variant="outlined"
				
			/>

			</div>
			<div className="col-lg-12">
			
			<TextFieldFormsy
				className="mb-16 w-full"
				type="text"
				name="address"
				label="Address"
				value=""
				validationErrors= 'Min character length is 4'
				
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<Icon className="text-20" color="action">
								home_work
							</Icon>
						</InputAdornment>
					)
				}}
				variant="outlined"
				
			/>

			</div>
			<div className="col-lg-6"/>
			<div className="col-lg-2"/>
			<div className="col-lg-4 flex justify-end mb-16">
			<Button
			
				variant="contained"
				color="secondary"
				className="w-1\/4  mt-16"
				aria-label="LOG IN"
				value="legacy"
				onClick={handleSubmit}
			>
				Save
			</Button>
			<Button
		
				variant="contained"
				color="primary"
				className="w-1\/4  mt-16 ml-16"
				aria-label="LOG IN"
				value="legacy"
			>
				Cancel
			</Button>

			</div>


	
		</Formsy>
	</div>
		}


				</div>
			}
		/>
	);
}

export default ProfilePage;
