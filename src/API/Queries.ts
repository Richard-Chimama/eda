import { gql } from "@apollo/client"

const checkHospital:any = gql`
    query checkHospital($name: String!){
     checkHospital(name:$name)
    }
`

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

export default {
    checkHospital,
    findSingleUser
}