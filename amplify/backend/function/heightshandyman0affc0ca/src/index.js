const aws = require('aws-sdk')
const ses = new aws.SES()

exports.handler = async (event) => {
  for (const streamedItem of event.Records) {
    if (streamedItem.eventName === 'INSERT') {
      //pull off items from stream
      const clientName = streamedItem.dynamodb.NewImage.name.S
      const clientEmail = streamedItem.dynamodb.NewImage.email.S
      const clientMessage = streamedItem.dynamodb.NewImage.message.S

      await ses
          .sendEmail({
            Destination: {
              ToAddresses: [process.env.SES_EMAIL],
            },
            Source: process.env.SES_EMAIL,
            Message: {
              Subject: { Data: `Client Inquiry - ${clientName}` },
              Body: {
                Text: { Data: `My name is ${clientName}. You can reach me at ${clientEmail}. ${clientMessage}` },
              },
            },
          })
          .promise()
    }
  }
  return { status: 'done' }
}


