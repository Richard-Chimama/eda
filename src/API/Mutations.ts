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
    $avatar: Upload
  ) {
    signUp(
      username: $username
      email: $email
      password: $password
      role: $role
      hospital: $hospital
      cnop: $cnop
      avatar: $avatar
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
    $logo: Upload
    $category: String!
  ) {
    newHospital(
      name: $name
      address: $address
      city: $city
      logo: $logo
      category: $category
    ) {
      id
    }
  }
`;

const REGISTER_PATIENT = gql`
  mutation NewPatient(
    $idCard: String!
    $firstName: String!
    $lastName: String!
    $gender: String!
    $streetAddress: String!
    $dateOfBirth: Date!
    $code: String!
    $middleName: String
    $area: String
    $patientPhoneNumber: String
    $contactPerson: String
    $contactPersonPhoneNumber: String
    $avatar: Upload
    $hospital: String
  ) {
    newPatient(
      id_card: $idCard
      first_name: $firstName
      last_name: $lastName
      gender: $gender
      street_address: $streetAddress
      date_of_birth: $dateOfBirth
      code: $code
      middle_name: $middleName
      area: $area
      patient_phone_number: $patientPhoneNumber
      contact_person: $contactPerson
      contact_person_phone_number: $contactPersonPhoneNumber
      avatar: $avatar
      hospital: $hospital
    ) {
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
  }
`;

const NEW_FICHE = gql`
  mutation NewFiche(
    $patient: String!
    $prescription: String
    $observations: String
    $ta: String
    $taille: String
    $poids: String
    $temperature: String
    $allergie: String
    $intoxication: String
    $atcdChirurgicaux: String
    $atcdMedicaux: String
    $rh: String
    $gs: String
    $pouls: String
    $user:String!
  ) {
    newFiche(
      patient: $patient
      prescription: $prescription
      observations: $observations
      ta: $ta
      taille: $taille
      poids: $poids
      temperature: $temperature
      allergie: $allergie
      intoxication: $intoxication
      atcd_chirurgicaux: $atcdChirurgicaux
      atcd_medicaux: $atcdMedicaux
      rh: $rh
      gs: $gs
      pouls: $pouls
      user: $user
    ) {
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
    }
  }
`;

const UPDATE_FICHE = gql`
  mutation UpdateFiche($updateFicheId: String!, 
    $prescription: String) {
  updateFiche(id: $updateFicheId,
      prescription: $prescription) {
    id
    prescription
    createdAt
    updatedAt

  }
}
`;

const NEW_EVENT = gql`
  mutation NewEvent(
    $start: Date!
    $end: Date!
    $title: String!
    $hospital: String!
    $user: String!
    $desc: String
  ) {
    newEvent(
      start: $start
      end: $end
      title: $title
      hospital: $hospital
      user: $user
      desc: $desc
    ) {
      id
      title
      desc
      start
      end
    }
  }
`;


export default {
    REGISTER_USER,
    SIGNIN_USER,
    REGISTER_HOSPITAL,
    REGISTER_PATIENT,
    NEW_FICHE,
    UPDATE_FICHE,
    NEW_EVENT
}