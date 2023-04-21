import React, {useState} from "react";
import * as S from "./styled";

const Form = () => {
    const [date, setDate] = useState("")
    const [nom, setNom] = useState("")
    const [postnom, setPostnom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [gs, setGS] = useState("")
    const [rh, setRH] = useState("")
    const [pouls, setPouls] = useState("")
    const [lieu, setLieu] = useState("")
    const [adress, setAdress] = useState("")
    const [atcdMedical, setAtcdMedical] = useState("")
    const [atcdChirur, setAtcdChirur] = useState("")
    const [allergie, setAllergie] = useState("")
    const [intoxication, setIntoxication] = useState("")
    const [age , setAge] = useState("")
    const [poids, setPoids] = useState("")
    const [taille, setTaille] = useState("")
    const [ ta, setTA] = useState("")
    const [ contactPerson, setContactPerson] = useState("")
    const [telephone, setTelephone] = useState("")


  return (
    <form>
      <S.Label htmlFor="first-name">
        NOM
        <input
          type="text"
          name="first-name"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
      </S.Label>
      <S.Label htmlFor="second-name">
        POSTNOM
        <input
          type="text"
          name="second-name"
          value={postnom}
          onChange={(e) => setPostnom(e.target.value)}
        />
      </S.Label>
      <S.Label htmlFor="third-name">
        PRENOM
        <input
          type="text"
          name="third-name"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
      </S.Label>
      <div>
        <S.Label htmlFor="gender-input">
          SEXE
          <select>
            <option>M</option>
            <option>F</option>
          </select>
          
        </S.Label>
        <S.Label htmlFor="gs-input">
        GS
        <input
          type="text"
          name="gs-input"
          value={gs}
          onChange={(e) => setGS(e.target.value)}
        />
      </S.Label>
      <S.Label htmlFor="rh-input">
        RH
        <input
          type="text"
          name="rh-input"
          value={rh}
          onChange={(e) => setRH(e.target.value)}
        />
      </S.Label>
      <S.Label htmlFor="pouls-input">
        POULS
        <input
          type="text"
          name="pouls-input"
          value={pouls}
          onChange={(e) => setPouls(e.target.value)}
        />
      </S.Label>
      </div>
      <div>
      <S.Label htmlFor="date-input">
        DATE DE NAISSANCE
        <input
          type="date"
          name="date-input"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </S.Label>
      <S.Label htmlFor="area-input">
        LIEU
        <input
          type="text"
          name="area-input"
          value={lieu}
          onChange={(e) => setLieu(e.target.value)}
        />
      </S.Label>
      </div>
      <S.Label htmlFor="address-input">
        ADRESS
        <input
          type="text"
          name="address-input"
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
        />
      </S.Label>
      <S.Label htmlFor="atcd-medical-input">
        ATCD MEDICAUX
        <input
          type="text"
          name="atcd-medical-input"
          value={atcdMedical}
          onChange={(e) => setAtcdMedical(e.target.value)}
        />
      </S.Label>
      <S.Label htmlFor="atcd-chirur-input">
        ATCD CHIRURGICAUX
        <input
          type="text"
          name="atcd-chirur-input"
          value={atcdChirur}
          onChange={(e) => setAtcdChirur(e.target.value)}
        />
      </S.Label>

      <div>
      <S.Label htmlFor="allergie-input">
        ALLERGIE
        <input
          type="text"
          name="allergie-input"
          value={allergie}
          onChange={(e) => setAllergie(e.target.value)}
        />
      </S.Label>
      <S.Label htmlFor="intoxication-input">
        INTOXICATION
        <input
          type="text"
          name="intoxication-input"
          value={intoxication}
          onChange={(e) => setIntoxication(e.target.value)}
        />
      </S.Label>
      </div>

      <div>
      <S.Label htmlFor="age-input">
        Age
        <input
          type="text"
          name="age-input"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </S.Label>
      <S.Label htmlFor="poids-input">
        POIDS
        <input
          type="text"
          name="poids-input"
          value={poids}
          onChange={(e) => setPoids(e.target.value)}
        />
      </S.Label>
      <S.Label htmlFor="taille-input">
        TAILLE
        <input
          type="text"
          name="taille-input"
          value={taille}
          onChange={(e) => setTaille(e.target.value)}
        />
      </S.Label>
      <S.Label htmlFor="ta-input">
        T.A
        <input
          type="text"
          name="ta-input"
          value={ta}
          onChange={(e) => setTA(e.target.value)}
        />
      </S.Label>
      </div>

      <S.Label htmlFor="contact-person-input">
        PERSONNE A CONTACTER EN CAS D'URGENT
        <input
          type="text"
          name="contact-person-input"
          value={contactPerson}
          onChange={(e) => setContactPerson(e.target.value)}
        />
      </S.Label>
      <S.Label htmlFor="telephone-input">
        TELEPHONE
        <input
          type="text"
          name="telephone-input"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />
      </S.Label>



    </form>
  );
};

export default Form;
