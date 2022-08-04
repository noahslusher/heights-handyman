import {
	ButtonGroup,
	Button,
	Card,
	Flex,
	Heading,
	Text,
	View,
	useTheme,
	TextField,
	TextAreaField,
	FieldGroupIcon,
	Icon,
	Link,
} from '@aws-amplify/ui-react'
import { BsTwitter, BsJournal, BsYoutube } from 'react-icons/bs'
import {API} from 'aws-amplify'
import {createClient} from './src/graphql/mutations.js'

function ContactForm() {
	const { tokens } = useTheme()

	const handleFormSubmit = async (e) => {
		e.preventDefault()
		const name = e.target.name.value
		const email = e.target.email.value
		const message = e.target.message.value

		await API.graphql({
			query: createClient,
			variables: {
				input: {
					name,
					email,
					message,
				},
			},
		})
    console.log('success')
	}
	return (
		<Flex justifyContent="center" alignItems="center" height="100vh">
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
							{/* <Link
								href="https://twitter.com/mtliendo"
								color={tokens.colors.blue[20]}
								fontSize={'2rem'}
							>
								<Icon ariaLabel="twitter" as={BsTwitter} />
							</Link> */}
							<Link
								href="https://www.youtube.com/channel/UCrOSmdkNLR8orMYde3H-aUQ"
								color={tokens.colors.red[60]}
								fontSize={'2rem'}
							>
								<Icon ariaLabel="youtube" as={BsYoutube} />
							</Link>
							{/* <Link
								href="https://blog.focusotter.com"
								color={tokens.colors.green[40]}
								fontSize={'2rem'}
							>
								<Icon ariaLabel="blog" as={BsJournal} />
							</Link> */}
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
										{/** Accessibility tip: pass empty ariaLabel for decorative icons. */}
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
										{/** Accessibility tip: pass empty ariaLabel for decorative icons. */}
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
									Send Message
								</Button>
							</View>
						</Flex>
					</View>
				</Flex>
			</Card>
		</Flex>
	)
}

export default ContactForm


