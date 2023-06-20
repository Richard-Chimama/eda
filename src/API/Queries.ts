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

const findPatientExamData = gql`
  query Lab_by_patient($patientId: String!) {
  lab_by_patient(patientId: $patientId) {
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
    patient {
      id
      gender
      first_name
      id_card
      last_name
      middle_name
      patient_phone_number
      street_address
      date_of_birth
      createdAt
      code
      avatar
      area
    }
    hospital {
      id
      name
      logo
      category
      address
      city
      createdAt
    }
    users {
      id
      avatar
      role
      username
      email
      cnop
    }
    ge
    gf
    snip
    sang_autres
  }
}

`

const findPatientFichePrenatale = gql`
  query Fiche_prenatale($patientId: String!) {
  fiche_prenatale(patientId: $patientId) {
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
    createdAt
    updatedAt
    patient {
      id
      id_card
      last_name
      middle_name
      gender
      first_name
      date_of_birth
      code
      avatar
      area
      contact_person
      contact_person_phone_number
      createdAt
      patient_phone_number
      street_address
    }
    hospital {
      id
      name
      city
      category
      logo
    }
    users {
      id
      role
      username
      avatar
      cnop
      email
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
    findCalendarByHospital,
    findPatientExamData,
    findPatientFichePrenatale
}