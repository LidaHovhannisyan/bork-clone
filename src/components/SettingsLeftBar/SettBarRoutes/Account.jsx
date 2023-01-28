import React from 'react';
import AccSettBar from '../AccSettBar';
import { makeStyles } from '@mui/styles';
import { Button, TextField } from '@mui/material';

const useStyles = makeStyles({
	wrapper: {
		display: 'flex',
		height: '91vh',
	},
	Account: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start',
		padding: '0 10px',
	},
	title: {
		margin: '50px 0px',
	},
	form: {
		display: 'flex',
		justifyContent: 'space-around',
		width: '100%',
		flex: 2,
	},
	formEvens: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		height: '40vh',
	},
	descripton: {
		flex: 2,
		margin: 0,
	},
	descriptonText: {
		borderRadius: '20px',
		border: '0.5px solid gray',
		padding: '5px',
	},
	updateBtn: {
		background: 'linear-gradient(45deg, #FF8E53 30%,  #5a5555 90%)',
		color: 'white',
	},
	cancelBtn: {
		color: '#3a3333',
	},
	actions: {
		flex: 0.5,
	},
});

function Account({ name, surname }) {
	const classes = useStyles();
	return (
		<div className={classes.wrapper}>
			<AccSettBar name={name} surname={surname} />
			<div className={classes.Account}>
				<h3 className={classes.title}>Account Settings</h3>
				<div className={classes.form}>
					<div className={classes.formEvens}>
						<h5>First Name</h5>
						<TextField className={classes.textField} variant="outlined" />
						<h5>Email</h5>
						<TextField className={classes.textField} variant="outlined" />
					</div>
					<div className={classes.formEvens}>
						<h5>Last Name</h5>
						<TextField className={classes.textField} variant="outlined" />
						<h5>Phone number</h5>
						<TextField className={classes.textField} variant="outlined" />
					</div>
				</div>
				<div className={classes.descripton}>
					<h4 className={classes.descriptonTitle}>Description</h4>
					<p className={classes.descriptonText}>
						This page is for viewing or editing current Account data.If you want
						to update your data just click on "Update" button below or if you
						want to cancel the changes you have done click on "Cancel" button
						below
					</p>
				</div>
				<div className={classes.actions}>
					<Button className={classes.updateBtn}>Update</Button>
					<Button className={classes.cancelBtn}>Cancel</Button>
				</div>
			</div>
		</div>
	);
}

export default Account;
