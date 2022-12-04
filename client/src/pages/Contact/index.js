// import {
// 	ButtonGroup,
// 	Button,
// 	Card,
// 	Flex,
// 	Heading,
// 	Text,
// 	View,
// 	useTheme,
// 	TextField,
// 	TextAreaField,
// 	FieldGroupIcon,
// 	Icon,
// 	Link,
// } from '@aws-amplify/ui-react'
// import { BsTwitter, BsJournal, BsYoutube } from 'react-icons/bs'
// import {API} from 'aws-amplify'

import React, {useEffect, useState } from 'react'

import DatePicker from "react-datepicker";
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";

import { useFormik } from 'formik';
import { createQuote } from './graphql/mutations.js';
import { listQuotes } from './graphql/queries.js'
// import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify, API, graphqlOperation } from 'aws-amplify';

import awsconfig from '../../aws-exports';

import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsconfig);





const validate = values => {


	// Validation parameters
	const errors = {};

	if (!values.name) {
		errors.firstName = 'Required';
	} else if (values.firstName.length > 40) {
		errors.firstName = 'Must be 40 characters or less';
	}

	if (!values.phone) {
		errors.phone = 'Required';
	} else if (values.phone.length !== 10) {
		errors.phone = 'Must be 10 characters';
	}

	if (!values.email) {
		errors.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}

	if (!values.date) {
		errors.date = 'Required';
	}
	
	if (!values.preference) {
		errors.preference = 'Required';
	}

	if (!values.information) {
		errors.information = 'Required';
	} 

	if (!values.fee) {
		errors.fee = 'Required';
	} 

	if (!values.agreement) {
		errors.agreement = 'Required';
	} else if (values.agreement !== true) {
		errors.agreement = 'Must agree to terms of service';
	}

	return errors;

};

const initialState = {
	name: '',
	phone: '',
	email: '',
	date: '',
	preference: '',
	information: '',
	source: '',
	fee: '',
	agreement: ''
}

const ContactForm = () => {

	// const { tokens } = useTheme()

// 	const [date, setDate] = useState(setHours(setMinutes(new Date(), 30), 17))

	
// 	const [formState, setFormState] = useState(initialState)
// 	const [quotes, setQuotes] = useState([])

// 	function setInput(key, value) {
// 		setFormState({ ...formState, [key]: value })
// }

// 	async function addQuote() {
// 		try {
// 			const quote = { ...formState}
// 			setQuotes([...quotes, quote])
// 			setFormState(initialState)
// 			await API.graphql(graphqlOperation(createQuote, {input: quote}))
// 	} catch (err) { 
// 		console.log('error creating quote:', err)
// 	}
// 	console.log({...formState})
// }

 const handleFormSubmit = async (e) => { e.preventDefault()
	
	await addQuote()
}

	const ahandleFormSubmit = async (e) => {
		e.preventDefault()
		const name = e.target.name.value
		const phone = e.target.phone.value
		const email = e.target.email.value
		const date = e.target.date.value
		const time = e.target.time.value
		const preference = e.target.preference.value
		const information = e.target.information.value
		const source = e.target.source.value
		const fee = e.target.name.fee
		const agreement = e.target.agreement.value

		await API.graphql({
			query: createQuote,
			variables: {
				input: {
					name,
					phone,
					email,
					date,
					preference,
					information,
					source,
					fee,
					agreement
				},
			},
		})
	}
	return (
		<section id="contact">
			<h1>
				Submit a Quote
			</h1>
			<form>

				<label>
					Your Name
					<input
						type="text"
						onChange={event => setInput('name', event.target.value)}
						value={formState.name}
						placeholder="Your Name">
						</input>
				</label>

				<label>
					Phone Number
					<input
						onChange={event => setInput('phone', event.target.value)}
						value={formState.phone}
						placeholder="8015567789">
						</input>
				</label>

				<label>
					Email
					<input
						onChange={event => setInput('email', event.target.value)}
						value={formState.email}
						placeholder="email@email.com">

						</input>
				</label>
				
				<div className="mb-3">
   <label htmlFor="exampleFormControlInput1" className="form-label">Date</label>
   <DatePicker selected={formState.date} onChange={(date) =>
   setDate(date)} id="exampleFormControlInput1"
   name="date" className="form-control" dateFormat="MMMM d, yyyy h:mm aa" withPortal 
   showTimeSelect minTime={setHours(setMinutes(new Date(), 0), 17)}
   maxTime={setHours(setMinutes(new Date(), 30), 20)}/>
</div>

				{/* <label>
					Time
					<input
						onChange={event => setInput('name', event.target.value)}
						value={formState.name}
						placeholder="Your Name"></input>
				</label> */}

				

				<label>
					Type of Work
					<input
						onChange={event => setInput('preference', event.target.value)}
						value={formState.preference}
						placeholder=""></input>
				</label>

				<label>
					Information
					<textarea
						onChange={event => setInput('information', event.target.value)}
						value={formState.information}
						placeholder=""></textarea>
				</label>

				<label>
					How did you hear about Heights Handyman Services?
					{/* <input
						onChange={event => setInput('source', event.target.value)}
						value={formState.source}
						placeholder=""></input> */}
						<select value={formState.source} onChange={event => setInput('source', event.target.value)}>            
												<option value="Google">Google</option>
            <option value="Thumbtack">Thumbtack</option>
            <option value="Facebook">Facebook</option>
            <option value="Referral">Referral</option>
												<option value="Other">Other</option>
          </select>
				</label>

				<label>
					If an on-site estimate is required, Heights Handyman Services will charge a $50 assessment/travel fee. This amount will be credited towards your final bill if Heights Handyman Services is hired, but is forfeited if not hired.
					<br/>
					Please check the box to agree.
					<div> 
						I agree
					<input className='ml-2'
						type="checkbox"
						onChange={event => setInput('fee', event.target.value)}
						value={formState.fee}
						placeholder="">
						</input>
					</div>
				</label>

				<label>
					This form only allows Heights Handyman Services to deliver a "ballpark" estimate. Please check the box to acknowledge that pricing may change once an on-site visit is made and Heights Handyman Services has all necessary information.
					<br/>
					<div>
						I Understand
					<input className='ml-2'
						type="checkbox"
						onChange={event => setInput('agreement', event.target.value)}
						value={formState.agreement}
						placeholder="">
						</input>
					</div>
				</label>


				<button onClick={addQuote} >Submit</button>
			</form>



			{/* <Flex justifyContent="center" alignItems="center" height="100vh">
			<Card
				padding={{ large: tokens.space.xxxl }}
				variation="elevated"
				borderRadius={tokens.radii.medium}
				backgroundColor={tokens.colors.blue[90]}
			>
				<Flex
					direction={{ base: 'column', large: 'row' }}
					justifyContent={{ large: 'center' }}
					gap={tokens.space.xl}
				>
					<Flex direction={'column'} justifyContent="space-between">
						<View style={{ marginBottom: tokens.space.small }}>
							<Heading color={tokens.colors.white} level={3}>
								Contact
							</Heading>
							<Text color={tokens.colors.neutral[60]}>
								Fill out the form below to contact
							</Text>
						</View>
						<ButtonGroup
							style={{ marginBottom: tokens.space.small }}
							color={tokens.colors.neutral[20]}
							direction={'column'}
							variation="link"
						>
							<Button
								color={tokens.colors.neutral[40]}
								justifyContent={'start'}
								gap="1rem"
							>
								<Icon color={tokens.colors.blue[40]} /> +1 (385)429-0440
							</Button>
							<Button
								color={tokens.colors.neutral[40]}
								justifyContent={'start'}
								gap="1rem"
							>
								<Icon color={tokens.colors.blue[40]} />{' '}
								service@heights-handyman.com
							</Button>
							<Button
								color={tokens.colors.neutral[40]}
								justifyContent={'start'}
								gap="1rem"
							>
								<Icon color={tokens.colors.blue[40]} /> Salt Lake City, UT
							</Button>
						</ButtonGroup>
						<Flex style={{ marginLeft: tokens.space.large }}>

							<Link
								href="https://www.youtube.com/channel/UCrOSmdkNLR8orMYde3H-aUQ"
								color={tokens.colors.red[60]}
								fontSize={'2rem'}
							>
								<Icon ariaLabel="youtube" as={BsYoutube} />
							</Link>
						</Flex>
					</Flex>
					<View
						width={{ base: '70vw', large: '400px' }}
						backgroundColor={tokens.colors.white}
						padding={tokens.space.medium}
						borderRadius={tokens.radii.medium}
					>
						<Flex as="form" direction={'column'} onSubmit={handleFormSubmit}>
							<TextField
								required
								label="Your Name"
								name="name"
								placeholder="Your Name"
								innerStartComponent={
									<FieldGroupIcon ariaLabel="">
										<Icon />
									</FieldGroupIcon>
								}
							/>
							<TextField
								label="Email"
								name="email"
								placeholder="you@email.com"
								type={'email'}
								required
								innerStartComponent={
									<FieldGroupIcon ariaLabel="">
										<Icon />
									</FieldGroupIcon>
								}
							/>
							<TextAreaField
								required
								label="Message"
								name="message"
								placeholder="Enter your message"
							/>
							<View style={{ marginTop: tokens.space.medium }}>
								<Button type="submit" variation="primary">
									Submit
								</Button>
							</View>
						</Flex>
					</View>
				</Flex>
			</Card>
		</Flex> */}
		</section>
	)
	}

export default ContactForm




