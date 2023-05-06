import { gql } from "@apollo/client"

const checkHospital:any = gql`
    query checkHospital($name: String!){
     checkHospital(name:$name)
    }
`

export default {
    checkHospital
}