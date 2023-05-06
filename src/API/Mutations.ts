import { gql } from '@apollo/client';

/**
 * This register the user and return a jwson token
 */
const REGISTER_USER = gql`
  mutation signUp(
    $username: String!
    $email: String!
    $password: String!
    $role: String!
    $hospital: String!
    $cnop: String
  ) {
    signUp(
      username: $username
      email: $email
      password: $password
      role: $role
      hospital: $hospital
      cnop: $cnop
    )
  }
`;

/**
 * this login a user and retutrn a token
 */
const SIGNIN_USER = gql`
    mutation signIn(
        $email: String!,
        $password: String!
    ){
        signIn(
            email: $email,
            password: $password
        )
    }
`

/**
 * register hospital
 */

const REGISTER_HOSPITAL = gql`
  mutation NewHospital(
    $name: String!
    $address: String!
    $city: String!
    $category: String!
  ) {
    newHospital(
      name: $name
      address: $address
      city: $city
      category: $category
    ) {
      id
    }
  }
`;


export default {
    REGISTER_USER,
    SIGNIN_USER,
    REGISTER_HOSPITAL
}