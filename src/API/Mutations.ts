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
    $id_card: String!
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
      id_card: $id_card
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
    $hospital: String!
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
      hospital: $hospital
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
    ){
    id
    h_pyloria
    gb
    fl
    gr
    hb
    hct
    vs
    frottis_vaginal
    temps_saignement
    temps_coagulation
    plq_sanguine
    autres
    ex_direct
    enrichissement
    sediment_urinaire
    sucre
    albuminurie
    gram
    ziell
    encre_chine
    hemoculture_ab
    coproculture_ab
    uroculture_ab
    spermatogramme
    fv
    widal
    hiv
    t_covid
    groupe_sanguin
    test_grossesse
    rpr
    hbs_ag
    hepati_b
    gs
    rh
    compatibilite
    electrophose
    test_emmel
    glycemie
    uree
    creatinine
    lipides_totaux
    cholesterol
    acide_urique
    triglyceride
    bil_t
    bil_d
    bil_l
    cnol_total
    sgot
    sgpt
    prot_24h
    proteine_t
    calcemie
    potassium
    sodium
    magnesium
    chlore
    glycosurie
    proteinuire
    lcr
    createdAt
    updatedAt
    gf
    snip
    sang_autres
  }
  }
`;

const NEW_FICHE_PRENATALE = gql`
  mutation New_fiche_prenatale(
    $ddr: Date!
    $dpa: Date!
    $patient: String!
    $hospital: String!
    $users: String!
    $fractureBassin: Boolean
    $fobromeUterin: Boolean
    $pep: Boolean
    $viol: Boolean
    $vihsida: Boolean
    $syphylis: Boolean
    $raa: Boolean
    $car: Boolean
    $dbt: Boolean
    $scass: Boolean
    $hta: Boolean
    $tbc: Boolean
    $above15: Boolean
    $above19: Boolean
  ) {
    new_fiche_prenatale(
      ddr: $ddr
      dpa: $dpa
      patient: $patient
      hospital: $hospital
      users: $users
      fracture_bassin: $fractureBassin
      fobrome_uterin: $fobromeUterin
      pep: $pep
      viol: $viol
      vihsida: $vihsida
      syphylis: $syphylis
      raa: $raa
      car: $car
      dbt: $dbt
      scass: $scass
      hta: $hta
      tbc: $tbc
      above15: $above15
      above19: $above19
    ) {
      id
      ddr
      dpa
      above19
      above15
      tbc
      hta
      scass
      dbt
      car
      raa
      syphylis
      vihsida
      viol
      pep
      fobrome_uterin
      fracture_bassin
    }
  }
`;

const NEW_POST = gql`
  mutation New_posts(
    $content: String!
    $image: Upload
    $author: String!
    $hospital: String!
  ) {
    new_posts(
      content: $content
      image: $image
      author: $author
      hospital: $hospital
    ) {
      id
      createdAt
      content
    }
  }
`;

const NEW_COMMENT = gql`
  mutation New_comments($comment: String, $post: String, $user: String) {
    new_comments(comment: $comment, post: $post, user: $user) {
      id
      comment
      createdAt
    }
  }
`;

const DELETE_USER = gql`
  mutation DeleteUser($user: String!) {
  deleteUser(user: $user)
}
`
const UPDATE_USER_ROLE = gql`
  mutation UpdateUserRole($user: String!, $role: String!) {
  updateUserRole(user: $user, role: $role) {
    id
    role
    username
    email
  }
}
`

export default {
  REGISTER_USER,
  SIGNIN_USER,
  REGISTER_HOSPITAL,
  REGISTER_PATIENT,
  NEW_FICHE,
  UPDATE_FICHE,
  NEW_EVENT,
  NEW_EXAMEN,
  NEW_FICHE_PRENATALE,
  NEW_POST,
  NEW_COMMENT,
  DELETE_USER,
  UPDATE_USER_ROLE
};