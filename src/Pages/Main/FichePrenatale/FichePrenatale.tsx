import React, { useState } from 'react'
import { redirect, useNavigate, useParams } from 'react-router-dom'
import ReturnAndSyncButtons from '../../../Components/ReturnAndSyncButtons'
import Title from '../../../Components/Title'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css'
import { FormValidationWithBootstrap } from '../../../Functions/utility/FormValidationBoostrap'
import API from '../../../API'
import { useMutation } from '@apollo/client'
import StateMessage from '../../../Components/StateMessage'

const FichePrenatale = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({
      ddr:"",
      dpa: "",
      fractureBassin: false,
      fobromeUterin: false,
      pep: false,
      viol: false,
      vihsida: false,
      syphylis: false,
      raa: false,
      car: false,
      dbt: false,
      scass:false,
      hta: false,
      tbc: false,
      above15: false,
      above19: false
    })

    const [New_fiche_prenatale, {loading, error, data}]= useMutation(API.Mutations.NEW_FICHE_PRENATALE)
    const hospitalId = localStorage.getItem('hospitalID')
    const user = localStorage.getItem('user')
    const userId = user && JSON.parse(user)

    const handleChange = (e:any)=>{
      let value
      const name = e.target.name
      if(name === 'ddr' || name === 'dpa'){
        value = e.target.value
      }else{
        value = e.target.checked
      }
      setInputs({...inputs, [name]: value})
    }

    const handleSubmit = (e:any)=>{
        e.preventDefault()
        FormValidationWithBootstrap()
        New_fiche_prenatale({
          variables:{
            ddr: inputs.ddr,
            dpa: inputs.dpa,
            fractureBassin: inputs.fractureBassin,
            fobromeUterin: inputs.fobromeUterin,
            pep: inputs.pep,
            viol: inputs.viol,
            vihsida: inputs.vihsida,
            syphylis: inputs.syphylis,
            raa: inputs.raa,
            car: inputs.car,
            dbt: inputs.dbt,
            scass: inputs.scass,
            hta: inputs.hta,
            tbc: inputs.tbc,
            above15: inputs.above15,
            above19: inputs.above19,
            hospital: hospitalId,
            users: userId.id,
            patient: params.id
          },
          onCompleted:()=>{
            navigate('/main/fiches/'+params.id)
          }
        })
    }

    if(loading){
      return <StateMessage loading />
    }
  
    if(error){
      return <StateMessage error={ error?.message}><h3>{error?.message}</h3></StateMessage>
    }
  

  return (
    <Container>
      <ReturnAndSyncButtons navigateTo={"/main/fiches/" + params.id} />
      <Title label="Fiches De Consultation Prenatale" />
      <div className="container">
        <form className=" container row g-3 needs-validation" onSubmit={handleSubmit} >
          <div className="col-md-6">
            <label htmlFor="validationCustom01" className="form-label">
              DDR
            </label>
            <input
              type="date"
              className="form-control"
              name="ddr"
              id="validationCustom01"
              value={inputs.ddr}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">ajouter une date!</div>
          </div>

          <div className="col-md-6">
            <label htmlFor="validationCustom02" className="form-label">
              DPA
            </label>
            <input
              type="date"
              className="form-control"
              name="dpa"
              id="validationCustom02"
              value={inputs.dpa}
              onChange={handleChange}
              required
            />
        <div className="invalid-feedback">ajouter une date!!</div>
          </div>

          <div className="col-md-12">
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                PRIMIPURE DE 19 ANS OU MOINS
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                name="above19"
                id="inlineCheckbox1"
                checked={inputs.above19}
                onChange={handleChange}
              />
            </div>

            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="inlineCheckbox2">
                15 ANS OU PLUS
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                name="above15"
                id="inlineCheckbox2"
                checked={inputs.above15}
                onChange={handleChange}
              />
            </div>
          </div>

          <h4>ANTECEDENTS</h4>
          <h6>1. Médicaux(cocher)</h6>

          <div className=" col-md-12">
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="tbc">
                TBC
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                name="tbc"
                id="tbc"
                checked={inputs.tbc}
                onChange={handleChange}
              />
            </div>
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="hta">
                HTA{" "}
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                name="hta"
                id="hta"
                checked={inputs.hta}
                onChange={handleChange}
              />
            </div>
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="scass">
                SCASS{" "}
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                name="scass"
                id="scass"
                checked={inputs.scass}
                onChange={handleChange}
              />
            </div>
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="dbt">
                DBT{" "}
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                name="dbt"
                id="dbt"
                checked={inputs.dbt}
                onChange={handleChange}
              />
            </div>
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="car">
                CAR
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                name="car"
                id="car"
                checked={inputs.car}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-md-12">
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="raa">
                RAA{" "}
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                name="raa"
                id="raa"
                checked={inputs.raa}
                onChange={handleChange}
              />
            </div>

            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="syphylis">
                SYPHYLIS{" "}
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                name="syphylis"
                id="syphylis"
                checked={inputs.syphylis}
                onChange={handleChange}
              />
            </div>

            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="vihsida">
                VIHSIDA{" "}
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                name="vihsida"
                id="vihsida"
                checked={inputs.vihsida}
                onChange={handleChange}
              />
            </div>

            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="viol">
                VIOL{" "}
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                name="viol"
                id="viol"
                checked={inputs.viol}
                onChange={handleChange}
              />
            </div>

            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="pep">
                PEP{" "}
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                name="pep"
                id="pep"
                checked={inputs.pep}
                onChange={handleChange}
              />
            </div>
          </div>

          <h6>2. Gynécologiques et Chirurgicaux(cocher)</h6>
          <div className=" col-md-12">
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="fibrome_uterin">
                Fibrome Utérin
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                name="fobromeUterin"
                id="fibrome_uterin"
                checked={inputs.fobromeUterin}
                onChange={handleChange}
              />
            </div>

            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="fracture_bassin">
                Fracture bassin
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                name="fractureBassin"
                id="fracture_bassin"
                checked={inputs.fractureBassin}
                onChange={handleChange}
              />
            </div>
          </div>

          <Submitted className="d-grid gap-2">
            <button className="btn btn-success btn-md" type="submit">
              Soumettre le formulaire
            </button>
          </Submitted>
        </form>
      </div>
    </Container>
  );
}

const Container = styled.div`
    width: 80%;
    margin: 2rem auto 0 auto;

    @media screen and (max-width: 450px){
        width: 95%;
    }
`

const Submitted = styled.div`
    margin-top: 2rem;
`

export default FichePrenatale