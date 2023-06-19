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

const NEW_EXAMEN = gql`
  mutation New_lab_fiche(
    $patient: String!
    $hospital: String!
    $users: String!
    $hPyloria: String
    $gb: String
    $fl: String
    $gr: String
    $hb: String
    $hct: String
    $vs: String
    $frottisVaginal: String
    $tempsSaignement: String
    $tempsCoagulation: String
    $plqSanguine: String
    $autres: String
    $exDirect: String
    $enrichissement: String
    $sedimentUrinaire: String
    $sucre: String
    $albuminurie: String
    $gram: String
    $ziell: String
    $encreChine: String
    $hemocultureAb: String
    $coprocultureAb: String
    $urocultureAb: String
    $spermatogramme: String
    $fv: String
    $widal: String
    $hiv: String
    $tCovid: String
    $groupeSanguin: String
    $testGrossesse: String
    $rpr: String
    $hbsAg: String
    $hepatiB: String
    $gs: String
    $rh: String
    $compatibilite: String
    $electrophose: String
    $testEmmel: String
    $glycemie: String
    $uree: String
    $creatinine: String
    $lipidesTotaux: String
    $cholesterol: String
    $acideUrique: String
    $triglyceride: String
    $bilT: String
    $bilD: String
    $bilL: String
    $cnolTotal: String
    $sgot: String
    $sgpt: String
    $prot24H: String
    $proteineT: String
    $calcemie: String
    $potassium: String
    $sodium: String
    $magnesium: String
    $chlore: String
    $glycosurie: String
    $proteinuire: String
    $lcr: String
    $ge: String
    $gf: String
    $snip: String
    $sangAutres: String
  ) {
    new_lab_fiche(
      patient: $patient
      hospital: $hospital
      users: $users
      h_pyloria: $hPyloria
      gb: $gb
      fl: $fl
      gr: $gr
      hb: $hb
      hct: $hct
      vs: $vs
      frottis_vaginal: $frottisVaginal
      temps_saignement: $tempsSaignement
      temps_coagulation: $tempsCoagulation
      plq_sanguine: $plqSanguine
      autres: $autres
      ex_direct: $exDirect
      enrichissement: $enrichissement
      sediment_urinaire: $sedimentUrinaire
      sucre: $sucre
      albuminurie: $albuminurie
      gram: $gram
      ziell: $ziell
      encre_chine: $encreChine
      hemoculture_ab: $hemocultureAb
      coproculture_ab: $coprocultureAb
      uroculture_ab: $urocultureAb
      spermatogramme: $spermatogramme
      fv: $fv
      widal: $widal
      hiv: $hiv
      t_covid: $tCovid
      groupe_sanguin: $groupeSanguin
      test_grossesse: $testGrossesse
      rpr: $rpr
      hbs_ag: $hbsAg
      hepati_b: $hepatiB
      gs: $gs
      rh: $rh
      compatibilite: $compatibilite
      electrophose: $electrophose
      test_emmel: $testEmmel
      glycemie: $glycemie
      uree: $uree
      creatinine: $creatinine
      lipides_totaux: $lipidesTotaux
      cholesterol: $cholesterol
      acide_urique: $acideUrique
      triglyceride: $triglyceride
      bil_t: $bilT
      bil_d: $bilD
      bil_l: $bilL
      cnol_total: $cnolTotal
      sgot: $sgot
      sgpt: $sgpt
      prot_24h: $prot24H
      proteine_t: $proteineT
      calcemie: $calcemie
      potassium: $potassium
      sodium: $sodium
      magnesium: $magnesium
      chlore: $chlore
      glycosurie: $glycosurie
      proteinuire: $proteinuire
      lcr: $lcr
      ge: $ge
      gf: $gf
      snip: $snip
      sang_autres: $sangAutres
    )
  }
`;


export default {
    REGISTER_USER,
    SIGNIN_USER,
    REGISTER_HOSPITAL,
    REGISTER_PATIENT,
    NEW_FICHE,
    UPDATE_FICHE,
    NEW_EVENT,
    NEW_EXAMEN
}