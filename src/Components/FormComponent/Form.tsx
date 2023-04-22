import React, { useState } from "react";
import * as S from "./styled";

const Form = () => {
  const [date, setDate] = useState("");
  const [nom, setNom] = useState("");
  const [postnom, setPostnom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [gender, setGender] = useState("");
  const [gs, setGS] = useState("");
  const [rh, setRH] = useState("");
  const [pouls, setPouls] = useState("");
  const [lieu, setLieu] = useState("");
  const [adress, setAdress] = useState("");
  const [atcdMedical, setAtcdMedical] = useState("");
  const [atcdChirur, setAtcdChirur] = useState("");
  const [allergie, setAllergie] = useState("");
  const [intoxication, setIntoxication] = useState("");
  const [age, setAge] = useState("");
  const [poids, setPoids] = useState("");
  const [taille, setTaille] = useState("");
  const [ta, setTA] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [telephone, setTelephone] = useState("");

  return (
    <S.Container>
      <S.Names className="names">
        <S.Label htmlFor="first-name">
          <span>NOM</span>
          <input
            type="text"
            name="first-name"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </S.Label>
        <S.Label htmlFor="second-name">
          <span>POSTNOM</span>
          <input
            type="text"
            name="second-name"
            value={postnom}
            onChange={(e) => setPostnom(e.target.value)}
            required
          />
        </S.Label>
        <S.Label htmlFor="third-name">
          <span>PRENOM</span>
          <input
            type="text"
            name="third-name"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            required
          />
        </S.Label>
      </S.Names>
      <S.BasicInfo>
        <S.Label htmlFor="gender-input">
          <span>SEXE</span>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="M">M</option>
            <option value="F">F</option>
          </select>
        </S.Label>
        <S.Label htmlFor="gs-input">
          <span>GS</span>
          <input
            type="text"
            name="gs-input"
            value={gs}
            onChange={(e) => setGS(e.target.value)}
            required
          />
        </S.Label>
        <S.Label htmlFor="rh-input">
          <span>RH</span>
          <input
            type="text"
            name="rh-input"
            value={rh}
            onChange={(e) => setRH(e.target.value)}
            required
          />
        </S.Label>
        <S.Label htmlFor="pouls-input">
          <span>POULS</span>
          <input
            type="text"
            name="pouls-input"
            value={pouls}
            onChange={(e) => setPouls(e.target.value)}
            required
          />
        </S.Label>
      </S.BasicInfo>
      <S.DateArea>
        <S.Label htmlFor="date-input">
          <span>DATE DE NAISSANCE</span>
          <input
            type="date"
            name="date-input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </S.Label>
        <S.Label htmlFor="area-input">
          <span>LIEU</span>
          <input
            type="text"
            name="area-input"
            value={lieu}
            onChange={(e) => setLieu(e.target.value)}
            required
          />
        </S.Label>
      </S.DateArea>
      <S.AdressATCD>
        <S.Label htmlFor="address-input">
          <span>ADRESS</span>
          <input
            type="text"
            name="address-input"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
            required
          />
        </S.Label>
        <S.Label htmlFor="atcd-medical-input">
          <span>ATCD MEDICAUX</span>
          <input
            type="text"
            name="atcd-medical-input"
            value={atcdMedical}
            onChange={(e) => setAtcdMedical(e.target.value)}
            required
          />
        </S.Label>
        <S.Label htmlFor="atcd-chirur-input">
          <span>ATCD CHIRURGICAUX</span>
          <input
            type="text"
            name="atcd-chirur-input"
            value={atcdChirur}
            onChange={(e) => setAtcdChirur(e.target.value)}
            required
          />
        </S.Label>
      </S.AdressATCD>

      <S.Allergie>
        <S.Label htmlFor="allergie-input">
          <span>ALLERGIE</span>
          <input
            type="text"
            name="allergie-input"
            value={allergie}
            onChange={(e) => setAllergie(e.target.value)}
            required
          />
        </S.Label>
        <S.Label htmlFor="intoxication-input">
          <span>INTOXICATION</span>
          <input
            type="text"
            name="intoxication-input"
            value={intoxication}
            onChange={(e) => setIntoxication(e.target.value)}
            required
          />
        </S.Label>
      </S.Allergie>

      <S.SecondaryInfo>
        <S.Label htmlFor="age-input">
          <span>Age</span>
          <input
            type="text"
            name="age-input"
            value={age}
            required
            onChange={(e) => setAge(e.target.value)}
          />
        </S.Label>
        <S.Label htmlFor="poids-input">
          <span>POIDS</span>
          <input
            type="text"
            name="poids-input"
            value={poids}
            onChange={(e) => setPoids(e.target.value)}
            required
          />
        </S.Label>
        <S.Label htmlFor="taille-input">
          <span>TAILLE</span>
          <input
            type="text"
            name="taille-input"
            value={taille}
            onChange={(e) => setTaille(e.target.value)}
            required
          />
        </S.Label>
        <S.Label htmlFor="ta-input">
          <span>T.A</span>
          <input
            type="text"
            name="ta-input"
            value={ta}
            onChange={(e) => setTA(e.target.value)}
            required
          />
        </S.Label>
      </S.SecondaryInfo>

      <S.ContactPerson>
        <S.Label htmlFor="contact-person-input">
          <span>PERSONNE A CONTACTER EN CAS D'URGENT</span>
          <input
            type="text"
            name="contact-person-input"
            value={contactPerson}
            onChange={(e) => setContactPerson(e.target.value)}
            required
          />
        </S.Label>
        <S.Label htmlFor="telephone-input">
          <span>TELEPHONE</span>
          <input
            type="text"
            name="telephone-input"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            required
          />
        </S.Label>
      </S.ContactPerson>
    </S.Container>
  );
};

export default Form;
