import gql from "graphql-tag";
import { CustomerFragment } from "/GRAPHQL/customer";

export const UPDATE_CUSTOMER = gql`
mutation UpdateCustomer($mutationId: String!, $id: ID!, $firstName: String, $lastName: String, $country: CountriesEnum, $city: String, $address: String, $phone: String, $email: String) {
  updateCustomer(input: {clientMutationId: $mutationId, id: $id, firstName: $firstName, lastName: $lastName, email: $email, billing: {phone: $phone, address1: $address, city: $city, country: $country}}) {
    customer {
      ..._Customer
    }
  }
}
${CustomerFragment}
`;
