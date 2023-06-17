import React from 'react'
import { useParams } from 'react-router-dom'
import ReturnAndSyncButtons from '../../../Components/ReturnAndSyncButtons'
import Title from '../../../Components/Title'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css'
import { FormValidationWithBootstrap } from '../../../Functions/utility/FormValidationBoostrap'

const FichePrenatale = () => {
    const params = useParams()

    const handleSubmit = (e:any)=>{
        e.preventDefault()
        FormValidationWithBootstrap()
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
                value="option1"
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
                value="option1"
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
                name="fibrome_uterin"
                id="fibrome_uterin"
              />
            </div>

            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="fracture_bassin">
                Fracture bassin
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                name="fracture_bassin"
                id="fracture_bassin"
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