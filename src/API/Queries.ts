import { gql } from "@apollo/client"

const checkHospital:any = gql`
    query checkHospital($name: String!){
     checkHospital(name:$name)
    }
`

const findHospitalById: any = gql`
  query Hospital($hospitalId: ID!) {
    hospital(id: $hospitalId) {
      name
      createdAt
      city
      category
      address
      id
      updatedAt
      user {
        id
        email
        cnop
        role
        username
      }
    }
  }
`;

const findSingleUser:any = gql`
    query User($email:String!){
        user(email: $email){
            id
            username
            cnop
            email
            role
            avatar
            hospital{
                id
                name
                city
                createdAt
                updatedAt
            }
        }
    }
`

const findAllUsers: any = gql`
  query Query {
    users {
      id
      email
      username
      role
      cnop
      hospital {
        id
        name
        createdAt
        city
        address
        updatedAt
      }
      avatar
    }
  }
`;

const findAllHospitals: any = gql`
  query Hospitals {
    hospitals {
      id
      name
      updatedAt
      createdAt
      city
      address
      user {
        id
        email
        role
        username
        cnop
        avatar
      }
    }
  }
`;

export default {
    checkHospital,
    findSingleUser,
    findHospitalById,
    findAllUsers,
    findAllHospitals
}