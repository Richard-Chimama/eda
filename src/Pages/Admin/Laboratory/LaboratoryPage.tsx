import React, { useState } from 'react'
import styled from 'styled-components'

const LaboratoryPage = () => {
  const [inputs, setInputs] = useState({
    acide_urique: "",
    frottis_vaginal: "",
    fl: "",
    temps_saignement: "",
    temps_coagulation: "",
    gr: "",
    hb: "",
    hct: "",
    autres: "",
    plq_sanguine: "",
    ex_direct: "",
    enrichssement: "",
    sediment_urinaire: "",
    gram: "",
    ziell: "",
    encre_chine:"",
    hemoculture: "",
    coproculture: "",
    uroculture: "",
    sgnot: "",
    sucre: "",
    ge: "",
    gf: "",
    snip: "",
    albuminurie: "",
    sang_autres: "",
bil_d: "",
bil_l: "",
bil_t: "",
calcemie: "",
chlore: "",
cholesterol: "",
cnol_total: "",
compatibilite: "",
creatinine: "",
electrophose: "",
fv: "",
gb: "",
glycemie: "",
glycosurie: "",
groupe_sanguin: "",
gs: "",
h_pyloria: "",
hbs_ag: "",
hepati_b: "",
hiv: "",
lcr: "",
lipides_totaux: "",
magnesium: "",
potassium: "",
prot_24h: "",
proteine_t: "",
proteinuire: "",
rh: "",
rpr: "",
sgot: "",
sgpt: "",
sodium: "",
spermatogramme: "",
t_covid: "",
test_emmel: "",
test_grossesse: "",
triglyceride: "",
uree: "",
uroculture_ab: "",
vs: "",
widal: ""
  })

  const handleChange = (e:any)=>{
    const name = e.target.name 
    const value = e.target.value

    setInputs({...inputs, [name]: value})
  }

  const handleSubmit = (e:any)=>{
    e.preventDefault()
    console.log(inputs)
    }

  return (
    <Container className='container'>
      <form className='col-md-10 col-lg-12 p-2 ' onSubmit={handleSubmit}>
        <h4 className='mb-3' >FICHE DE LABORATOIRE</h4>
        <div className='row g-2'>
          <h6 className='mb-2'>1. HEMATOLOGIE</h6>
          <div className='col-sm-6'>
            <label htmlFor="gb">H. Pylori</label>
            <input type="text" className="form-control" name="h_pyloria" id="h_pylori" placeholder="" value={inputs.h_pyloria} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
          <div className='col-sm-6'>
            <label htmlFor="vs">VS  (≤ 20 mm/h)</label>
            <input type="text" className="form-control" name="vs" id="vs" placeholder="" value={inputs.vs} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
        </div>

        <div className='row g-2 pt-3'>
          <div className='col-sm-6'>
            <label htmlFor="gb">GB (4000 -10000/mm^3)</label>
            <input type="text" className="form-control" name="gb" id="gb" placeholder="" value={inputs.gb} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
          <div className='col-sm-6'>
            <label htmlFor="frottis_vaginal">Frottis Vaginal </label>
            <input type="text" className="form-control" name="frottis_vaginal" id="frottis_vaginal" placeholder="" value={inputs.frottis_vaginal} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
        </div>

        <div className='row g-2 pt-3'>
          <div className='col-sm-6'>
            <label htmlFor="fl">FL</label>
            <input type="text" className="form-control" name="fl" id="fl" placeholder="" value={inputs.fl} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
          <div className='col-sm-6'>
            <label htmlFor="temps_saignement">Temps de Saignement (2 - 6 min)</label>
            <input type="text" className="form-control" name="temps_saignement" id="temps_saignement" placeholder="" value={inputs.temps_saignement} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
        </div>


        <div className='row g-2 pt-3'>
          <div className='col-sm-6'>
            <label htmlFor="gr">GR</label>
            <input type="text" className="form-control" name="gr" id="gr" placeholder="" value={inputs.gr} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
          <div className='col-sm-6'>
            <label htmlFor="temps_coagulation">Temps de Coagulation (5 - 12 min)</label>
            <input type="text" className="form-control" name="temps_coagulation" id="temps_coagulation" placeholder="" value={inputs.temps_coagulation} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
        </div>

        <div className='row g-2 pt-3'>
          <div className='col-sm-6'>
            <label htmlFor="hb">HB</label>
            <input type="text" className="form-control" name="hb" id="hb" placeholder="" value={inputs.hb} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
          <div className='col-sm-6'>
            <label htmlFor="plq_sanguine">Plq Sanguine</label>
            <input type="text" className="form-control" name="plq_sanguine" id="plq_sanguine" placeholder="" value={inputs.plq_sanguine} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
        </div>

        <div className='row g-2 pt-3'>
          <div className='col-sm-6'>
            <label htmlFor="hct">HCT</label>
            <input type="text" className="form-control" name="hct" id="hct" placeholder="" value={inputs.hct} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
          <div className='col-sm-6'>
            <label htmlFor="autres">Autres</label>
            <input type="text" className="form-control" name="autres" id="autres" placeholder="" value={inputs.autres} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
        </div>
          
          <hr />

          <div className="row g-2 pt-2">
          <h6 className='mb-2'>2. PARASITOLOGIE</h6>

            <div className="col-sm-4">
                  <h6 className='mb-1'>SELLES</h6>
                  <div className='pt-2'>
                  <label htmlFor="ex_direct">Ex. Direct</label>
                  <input type="text" className="form-control" name="ex_direct" id="ex_direct" placeholder="" value={inputs.ex_direct} onChange={handleChange} />
                  <div className="invalid-feedback"></div>
                  </div>

                  <div className='pt-2'>
                  <label htmlFor="enrichssement">Enrichssement</label>
                  <input type="text" className="form-control" name="enrichssement" id="enrichssement" placeholder="" value={inputs.enrichssement} onChange={handleChange} />
                  <div className="invalid-feedback"></div>
                  </div>
            </div>


            <div className="col-sm-4">
                  <h6 className='mb-1 '>URINES</h6>

                  <div className='pt-2'>
                  <label htmlFor="sediment_urinaire">Sediment Urinaine</label>
                  <input type="text" className="form-control" name="sediment_urinaire" id="sediment_urinaire" placeholder="" value={inputs.sediment_urinaire} onChange={handleChange} />
                  <div className="invalid-feedback"></div>
                  </div>

                  <div className='pt-2'>
                  <label htmlFor="sucre">Sucre</label>
                  <input type="text" className="form-control" name="sucre" id="sucre" placeholder="" value={inputs.sucre} onChange={handleChange} />
                  <div className="invalid-feedback"></div>
                  </div>

                  <div className='pt-2'>
                  <label htmlFor="albuminurie">Albuminurie</label>
                  <input type="text" className="form-control" name="albuminurie" id="albuminurie" placeholder="" value={inputs.albuminurie} onChange={handleChange} />
                  <div className="invalid-feedback"></div>
                  </div>
            </div>


            <div className="col-sm-4">
                <h6 className='mb-1 '>SANG</h6>

                <div className='pt-2'>
                <label htmlFor="ge">GE</label>
                <input type="text" className="form-control" name="ge" id="ge" placeholder="" value={inputs.ge} onChange={handleChange} />
                <div className="invalid-feedback"></div>
                </div>

                <div className='pt-2'>
                <label htmlFor="gf">GF</label>
                <input type="text" className="form-control" name="gf" id="gf" placeholder="" value={inputs.gf} onChange={handleChange} />
                <div className="invalid-feedback"></div>
                </div>

                <div className='pt-2'>
                <label htmlFor="snip">SNIP</label>
                <input type="text" className="form-control" name="snip" id="snip" placeholder="" value={inputs.snip} onChange={handleChange} />
                <div className="invalid-feedback"></div>
                </div>
                
                <div className='pt-2'>
                <label htmlFor="sang_autres">Autres</label>
                <input type="text" className="form-control" name="sang_autres" id="sang_autres" placeholder="" value={inputs.sang_autres} onChange={handleChange} />
                <div className="invalid-feedback"></div>
                </div>
            </div>

          </div>


          <hr />
          <div className="row g-2 pt-2">
          <h6 className='mb-2'>3. BACYERIOLOGIE</h6>
          <div className='col-sm-6'>
            <label htmlFor="gram">Gram</label>
            <input type="text" className="form-control" name="gram" id="gram" placeholder="" value={inputs.gram} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>

          <div className='col-sm-6'>
            <label htmlFor="ziell">Ziell</label>
            <input type="text" className="form-control" name="ziell" id="ziell" placeholder="" value={inputs.ziell} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
          </div>

          <div className="row g-2 pt-2">
          <div className='col-sm-6'>
            <label htmlFor="encre_chine">Encre de Chine</label>
            <input type="text" className="form-control" name="encre_chine" id="encre_chine" placeholder="" value={inputs.encre_chine} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>

          <div className='col-sm-6'>
            <label htmlFor="hemoculture_ab">Hémoculture + AB</label>
            <input type="text" className="form-control" name="hemoculture_ab" id="hemoculture_ab" placeholder="" value={inputs.hemoculture} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
          </div>


          <div className="row g-2 pt-2">
          <div className='col-sm-6'>
            <label htmlFor="coproculture_ab">Coproculture + AB</label>
            <input type="text" className="form-control" name="coproculture_ab" id="coproculture_ab" placeholder="" value={inputs.coproculture} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>

          <div className='col-sm-6'>
            <label htmlFor="uroculture_ab">Uroculture + AB</label>
            <input type="text" className="form-control" name="uroculture_ab" id="uroculture_ab" placeholder="" value={inputs.uroculture} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
          </div>

          <div className="row g-2 pt-2">
          <div className='col-sm-6'>
            <label htmlFor="spermatogramme">Supermatogramme</label>
            <input type="text" className="form-control" name="spermatogramme" id="spermatogramme" placeholder="" value={inputs.spermatogramme} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>

          <div className='col-sm-6'>
            <label htmlFor="fv">FV</label>
            <input type="text" className="form-control" name="fv" id="fv" placeholder="" value={inputs.fv} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
          </div>


          <hr />
          <div className="row g-2 pt-2">
          <h6 className='mb-2'>4. SEROLOGIE & IMMUNOLOGIE </h6>
          <div className='col-sm-6'>
            <label htmlFor="widal">Widal</label>
            <input type="text" className="form-control" name="widal" id="widal" placeholder="" value={inputs.widal} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>

          <div className='col-sm-6'>
            <label htmlFor="hiv">HIV</label>
            <input type="text" className="form-control" name="hiv" id="hiv" placeholder="" value={inputs.hiv} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
          </div>

          <div className="row g-2 pt-2">
          <div className='col-sm-6'>
            <label htmlFor="groupe_sanguin">Groupe Sanguin</label>
            <input type="text" className="form-control" name="groupe_sanguin" id="groupe_sanguin" placeholder="" value={inputs.groupe_sanguin} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>

          <div className='col-sm-6'>
            <label htmlFor="t_covid">T.Covid</label>
            <input type="text" className="form-control" name="t_covid" id="t_covid" placeholder="" value={inputs.t_covid} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
          </div>

          <div className="row g-2 pt-2">
          <div className='col-sm-6'>
            <label htmlFor="test_grossesse">Test de Grossesse</label>
            <input type="text" className="form-control" name="test_grossesse" id="test_grossesse" placeholder="" value={inputs.test_grossesse} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>

          <div className='col-sm-6'>
            <label htmlFor="rpr">RPR</label>
            <input type="text" className="form-control" name="rpr" id="rpr" placeholder="" value={inputs.rpr} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
          </div>

          <div className="row g-2 pt-2">
          <div className='col-sm-6'>
            <label htmlFor="hbs_ag">Hbs Ag</label>
            <input type="text" className="form-control" name="hbs_ag" id="hbs_ag" placeholder="" value={inputs.hbs_ag} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>

          <div className='col-sm-6'>
            <label htmlFor="hepati_b">Hepati B</label>
            <input type="text" className="form-control" name="hepati_b" id="hepati_b" placeholder="" value={inputs.hepati_b} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
          </div>

          <div className="row g-2 pt-2">
          <div className='col-sm-6'>
            <label htmlFor="gs">GS</label>
            <input type="text" className="form-control" name="gs" id="gs" placeholder="" value={inputs.gs} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>

          <div className='col-sm-6'>
            <label htmlFor="rh">Rh</label>
            <input type="text" className="form-control" name="rh" id="rh" placeholder="" value={inputs.rh} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
          </div>

          <div className="row g-2 pt-2">
          <div className='col-sm-6'>
            <label htmlFor="compatibilite">Compatibilité</label>
            <input type="text" className="form-control" name="compatibilite" id="compatibilite" placeholder="" value={inputs.compatibilite} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>

          <div className='col-sm-6'>
            <label htmlFor="electrophose">Electrophose</label>
            <input type="text" className="form-control" name="electrophose" id="electrophose" placeholder="" value={inputs.electrophose} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
          </div>

          <div className="row g-2 pt-2">
          <div className='col-sm-6'>
            <label htmlFor="test_emmel">Test Emmel</label>
            <input type="text" className="form-control" name="test_emmel" id="test_emmel" placeholder="" value={inputs.test_emmel} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
          </div>



          <hr />
          <div className="row g-2 pt-2">
          <h6 className='mb-2'>5. BIOCHIMIE </h6>
          <div className='col-sm-6'>
            <label htmlFor="glycemie">Gycémie (80 - 130 mg/l)</label>
            <input type="text" className="form-control" name="glycemie" id="glycemie" placeholder="" value={inputs.glycemie} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>

          <div className='col-sm-6'>
            <label htmlFor="uree">Urée (10 - 50mg/dl)</label>
            <input type="text" className="form-control" name="uree" id="uree" placeholder="" value={inputs.uree} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
          </div>

          <div className="row g-2 pt-2">
          <div className='col-sm-6'>
            <label htmlFor="creatinine">Créatinine (0,5 - 1,5 mg/dl)</label>
            <input type="text" className="form-control" name="creatinine" id="creatinine" placeholder="" value={inputs.creatinine} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>

          <div className='col-sm-6'>
            <label htmlFor="lipides_totaux">Lipides Totaux (400 - 800mg/dl)</label>
            <input type="text" className="form-control" name="lipides_totaux" id="lipides_totaux" placeholder="" value={inputs.lipides_totaux} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
          </div>

          <div className="row g-2 pt-2">
          <div className='col-sm-6'>
            <label htmlFor="cholesterol">Cholestérol</label>
            <input type="text" className="form-control" name="cholesterol" id="cholesterol" placeholder="" value={inputs.cholesterol} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>

          <div className='col-sm-6'>
            <label htmlFor="acide_urique">Acide Urique (3,5 - 7,5mg/dl)</label>
            <input type="text" className="form-control" name="acide_urique" id="acide_urique" placeholder="" value={inputs.acide_urique} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
          </div>

          <div className="row g-2 pt-2">
          <div className='col-sm-6'>
            <label htmlFor="triglyceride">Triglycéride</label>
            <input type="text" className="form-control" name="triglyceride" id="triglyceride" placeholder="" value={inputs.triglyceride} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>

          <div className='col-sm-6'>
            <label htmlFor="bil_t">Bil.T ( ≤ 2 mg/dl)</label>
            <input type="text" className="form-control" name="bil_t" id="bil_t" placeholder="" value={inputs.bil_t} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
          </div>

          <div className="row g-2 pt-2">
          <div className='col-sm-6'>
            <label htmlFor="bil_d">Bil.D  ( ≤ 1 mg/dl)</label>
            <input type="text" className="form-control" name="bil_d" id="bil_d" placeholder="" value={inputs.bil_d} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>

          <div className='col-sm-6'>
            <label htmlFor="bil_l">Bil.I  ( ≤ 1 mg/dl)</label>
            <input type="text" className="form-control" name="bil_l" id="bil_l" placeholder="" value={inputs.bil_l} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
          </div>

          <div className="row g-2 pt-2">
          <div className='col-sm-6'>
            <label htmlFor="cnol_total">Cnol. Total  ( =200 mg/dl)</label>
            <input type="text" className="form-control" name="cnol_total" id="cnol_total" placeholder="" value={inputs.cnol_total} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>

          <div className='col-sm-6'>
            <label htmlFor="sgot">SGOT (≤40u/dl)</label>
            <input type="text" className="form-control" name="sgot" id="sgot" placeholder="" value={inputs.sgnot} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
          </div>

          <div className="row g-2 pt-2">
          <div className='col-sm-6'>
            <label htmlFor="sgpt">SGPT (≤40u/dl)</label>
            <input type="text" className="form-control" name="sgpt" id="sgpt" placeholder="" value={inputs.sgpt} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>

          <div className='col-sm-6'>
            <label htmlFor="prot_24h">Prot. De 24h  (150 - 450mg/24h)</label>
            <input type="text" className="form-control" name="prot_24h" id="prot_24h" placeholder="" value={inputs.prot_24h} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
          </div>

          <div className="row g-2 pt-2">
          <div className='col-sm-6'>
            <label htmlFor="proteine_t">Protéine t.  (60 - 80g/dl)</label>
            <input type="text" className="form-control" name="proteine_t" id="proteine_t" placeholder="" value={inputs.proteine_t} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
          </div>


          <hr />
          <div className="row g-2 pt-2">
          <h6 className='mb-2'>6. IONOGRAMME </h6>
          <div className='col-sm-6'>
            <label htmlFor="calcemie">Calcemie (1,12 - 1,32 mmol/l)</label>
            <input type="text" className="form-control" name="calcemie" id="calcemie" placeholder="" value={inputs.calcemie} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>

          <div className='col-sm-6'>
            <label htmlFor="potassium">Potassium (3,5 - 5 mmol/l)</label>
            <input type="text" className="form-control" name="potassium" id="potassium" placeholder="" value={inputs.potassium} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
          </div>


          <div className="row g-2 pt-2">
          <div className='col-sm-6'>
            <label htmlFor="sodium">Sodium (135 - 145 mmol/l)</label>
            <input type="text" className="form-control" name="sodium" id="sodium" placeholder="" value={inputs.sodium} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>

          <div className='col-sm-6'>
            <label htmlFor="magnesium">Magnésium </label>
            <input type="text" className="form-control" name="magnesium" id="magnesium" placeholder="" value={inputs.magnesium} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
          </div>

          <div className="row g-2 pt-2">
          <div className='col-sm-6'>
            <label htmlFor="chlore">Chlore (98 - 108 mmol/l)</label>
            <input type="text" className="form-control" name="chlore" id="chlore" placeholder="" value={inputs.chlore} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>

          <div className='col-sm-6'>
            <label htmlFor="glycosurie">Glycosurie </label>
            <input type="text" className="form-control" name="glycosurie" id="glycosurie" placeholder="" value={inputs.glycosurie} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
          </div>

          <div className="row g-2 pt-2">
          <div className='col-sm-6'>
            <label htmlFor="proteinuire">Protéinurie</label>
            <input type="text" className="form-control" name="proteinuire" id="proteinuire" placeholder="" value={inputs.proteinuire} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
          </div>


          <hr />
          <div className="row g-2 pt-2">
          <h6 className='mb-2'>7. AUTRES LIQUIDES </h6>
          <div className='col-sm-6'>
            <label htmlFor="lcr"> LCR</label>
            <input type="text" className="form-control" name="lcr" id="lcr" placeholder="" value={inputs.lcr} onChange={handleChange} />
            <div className="invalid-feedback"></div>
          </div>
          </div>

          <hr className="my-4" />
          <button className="w-100 btn btn-success btn-lg" type="submit">Enregistrer</button>
      </form>
      </Container>
  )
}

const Container = styled.div`
  width: 90%;
  margin-inline: auto;
  padding-bottom: 5rem;

  @media screen and (max-width: 450px){
    width: 95%;
    padding-top: 3rem;
  }
`

export default LaboratoryPage