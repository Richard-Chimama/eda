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
      logo
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

const findAllPatients: any = gql`
  query Patients {
    patients {
      id
      createdAt
      code
      area
      gender
      date_of_birth
      last_name
      contact_person
      contact_person_phone_number
      first_name
      patient_phone_number
      middle_name
      street_address
      updatedAt
      id_card
      avatar
      hospital {
        id
        name
        city
      }
    }
  }
`;

const findAllFiches:any = gql`
  query Form_attendances {
  form_attendances {
    id
    allergie
    intoxication
    atcd_chirurgicaux
    atcd_medicaux
    rh
    gs
    pouls
    temperature
    poids
    taille
    ta
    observations
    prescription
    createdAt
    updatedAt
    patient {
      id
      id_card
      first_name
      middle_name
      last_name
      gender
      area
      street_address
      date_of_birth
      code
      patient_phone_number
      contact_person
      contact_person_phone_number
      avatar
      createdAt
      updatedAt
    }
    users {
      id
      username
      role
      email
      cnop
      avatar
    }
  }
}
`

const findCalendarByHospital = gql`
  query Calendar_by_hospital($hospitalId: String!) {
  calendar_by_hospital(hospitalId: $hospitalId) {
    title
    desc
    end
    id
    start
    hospital {
      id
      name
      address
      city
      logo
      category
    }
    user {
      id
      username
      email
      avatar
      cnop
      role
    }
  }
}
`

export default {
    checkHospital,
    findSingleUser,
    findHospitalById,
    findAllUsers,
    findAllHospitals,
    findAllPatients,
    findAllFiches,
    findCalendarByHospital
}