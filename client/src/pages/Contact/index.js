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

import { useFormik } from 'formik';
import { createQuote } from './graphql/mutations.js';
import { listQuotes } from './graphql/queries.js'
// import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify, API, graphqlOperation } from 'aws-amplify';

import awsconfig from '../../aws-exports';

import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsconfig);

const initialState = {
	name: '',
	phone: '',
	email: '',
	date: '',
	time: '',
	preference: '',
	information: '',
	source: '',
	fee: '',
	agreement: ''
}

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
	} else if (values.phone.length === 10) {
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

function ContactForm() {
	// const { tokens } = useTheme()

	const [formState, setFormState] = useState(initialState)
	const [quotes, setQuotes] = useState([])

	async function addQuote() {
		try {
			const quote = { ...formState}
			setQuotes([...quotes, quote])
			setFormState(initialState)
			await API.graphql(graphqlOperation(createQuote, {input: quote}))
	} catch (err) { 
		console.log('error creating quote, err')
	}
}

	const handleFormSubmit = async (e) => {
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
					time,
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
			<form onSubmit={handleFormSubmit}>

				<label>
					Your Name
					<input
						type="text"
						placeholder="Your name"
						name="name"></input>
				</label>

				<label>
					Phone Number
					<input
						type="number"
						name="phone"></input>
				</label>

				<label>
					Email
					<input
						type="email"
						name="email"></input>
				</label>

				<label>
					Date
					<input
						type="text"
						name="date"></input>
				</label>

				<label>
					Time
					<input
						type="text"
						name="time"></input>
				</label>

				<label>
					Time
					<input
						type="text"
						name="time"></input>
				</label>

				<label>
					Preference
					<input
						type="text"
						name="preference"></input>
				</label>

				<label>
					Information
					<input
						type="text"
						name="information"></input>
				</label>

				<label>
					Source
					<input
						type="text"
						name="source"></input>
				</label>

				<label>
					Fee
					<input
						type="text"
						name="fee"></input>
				</label>

				<label>
					Agreement
					<input
						type="text"
						name="agreement"></input>
				</label>


				<button type="submit">Submit</button>
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




