/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const aws = require('aws-sdk')
const ses = new aws.SES()

exports.handler = async (event) => {
  for (const streamedItem of event.Records) {
    if (streamedItem.eventName === 'INSERT') {
      //pull off items from stream
      const clientName = streamedItem.dynamodb.NewImage.name.S
      const clientPhone = streamedItem.dynamodb.NewImage.phone.S
      const clientEmail = streamedItem.dynamodb.NewImage.email.S
      const clientDate = streamedItem.dynamodb.NewImage.date.S
      const clientPreference = streamedItem.dynamodb.NewImage.preference.S
      const clientInformation = streamedItem.dynamodb.NewImage.information.S
      const clientSource = streamedItem.dynamodb.NewImage.source.S
      const clientFee = streamedItem.dynamodb.NewImage.fee.S
      const clientAgreement = streamedItem.dynamodb.NewImage.agreement.S

      await ses
          .sendEmail({
            Destination: {
              ToAddresses: [process.env.SES_EMAIL],
            },
            Source: process.env.SES_EMAIL,
            Message: {
              Subject: { Data: `Quote Request--${clientName}` },
              Body: {
                Text: { Data: `
                My name is ${clientName}.
                My phone number is ${clientPhone}.
                My email address is ${clientEmail}.
                I would like to schedule you for ${clientDate} at ${clientTime}.
                I would prefer to pay ${clientPreference}.
                The details of my job are: ${clientInformation}.
                I heard about you via ${clientSource}.
                My answer to paying the $50 on-site estimate fee is: ${clientFee}.
                I have agreed to your terms: ${clientAgreement}
                ` },
              },
            },
          })
          .promise()
    }
  }
  return { status: 'done' }
}