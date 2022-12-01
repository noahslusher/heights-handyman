/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createQuote = /* GraphQL */ `
  mutation CreateQuote(
    $input: CreateQuoteInput!
    $condition: ModelQuoteConditionInput
  ) {
    createQuote(input: $input, condition: $condition) {
      id
      name
      phone
      email
      date
      time
      preference
      information
      source
      fee
      agreement
      createdAt
      updatedAt
    }
  }
`;
export const updateQuote = /* GraphQL */ `
  mutation UpdateQuote(
    $input: UpdateQuoteInput!
    $condition: ModelQuoteConditionInput
  ) {
    updateQuote(input: $input, condition: $condition) {
      id
      name
      phone
      email
      date
      time
      preference
      information
      source
      fee
      agreement
      createdAt
      updatedAt
    }
  }
`;
export const deleteQuote = /* GraphQL */ `
  mutation DeleteQuote(
    $input: DeleteQuoteInput!
    $condition: ModelQuoteConditionInput
  ) {
    deleteQuote(input: $input, condition: $condition) {
      id
      name
      phone
      email
      date
      time
      preference
      information
      source
      fee
      agreement
      createdAt
      updatedAt
    }
  }
`;
