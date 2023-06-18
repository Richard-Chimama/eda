import React from 'react'

const LaboratoryPage = () => {
  return (
    <div className='container'>
      <form className='col-md-10 col-lg-10 p-2 '>
        <h4 className='mb-3' >FICHE DE LABORATOIRE</h4>
        <div className='row g-2'>
          <h6 className='mb-2'>1. HEMATOLOGIE</h6>
          <div className='col-sm-6'>
            <label htmlFor="gb">H. Pylori</label>
            <input type="text" className="form-control" name="h_pyloria" id="h_pylori" placeholder="" value="" required />
            <div className="invalid-feedback"></div>
          </div>
          <div className='col-sm-6'>
            <label htmlFor="vs">VS  (≤ 20 mm/h)</label>
            <input type="text" className="form-control" name="vs" id="vs" placeholder="" value="" required />
            <div className="invalid-feedback"></div>
          </div>
        </div>

        <div className='row g-2 pt-3'>
          <div className='col-sm-6'>
            <label htmlFor="gb">GB (4000 -10000/mm^3)</label>
            <input type="text" className="form-control" name="gb" id="gb" placeholder="gb" value="" required />
            <div className="invalid-feedback"></div>
          </div>
          <div className='col-sm-6'>
            <label htmlFor="frottis_vaginal">Frottis Vaginal </label>
            <input type="text" className="form-control" name="frottis_vaginal" id="frottis_vaginal" placeholder="" value="" required />
            <div className="invalid-feedback"></div>
          </div>
        </div>

        <div className='row g-2 pt-3'>
          <div className='col-sm-6'>
            <label htmlFor="fl">FL</label>
            <input type="text" className="form-control" name="fl" id="fl" placeholder="fl" value="" required />
            <div className="invalid-feedback"></div>
          </div>
          <div className='col-sm-6'>
            <label htmlFor="temps_saignement">Temps de Saignement (2 - 6 min)</label>
            <input type="text" className="form-control" name="temps_saignement" id="temps_saignement" placeholder="" value="" required />
            <div className="invalid-feedback"></div>
          </div>
        </div>


        <div className='row g-2 pt-3'>
          <div className='col-sm-6'>
            <label htmlFor="gr">GR</label>
            <input type="text" className="form-control" name="gr" id="gr" placeholder="" value="" required />
            <div className="invalid-feedback"></div>
          </div>
          <div className='col-sm-6'>
            <label htmlFor="temps_coagulation">Temps de Coagulation (5 - 12 min)</label>
            <input type="text" className="form-control" name="temps_coagulation" id="temps_coagulation" placeholder="" value="" required />
            <div className="invalid-feedback"></div>
          </div>
        </div>

        <div className='row g-2 pt-3'>
          <div className='col-sm-6'>
            <label htmlFor="hb">HB</label>
            <input type="text" className="form-control" name="hb" id="hb" placeholder="" value="" required />
            <div className="invalid-feedback"></div>
          </div>
          <div className='col-sm-6'>
            <label htmlFor="plq_sanguine">Plq Sanguine</label>
            <input type="text" className="form-control" name="plq_sanguine" id="plq_sanguine" placeholder="" value="" required />
            <div className="invalid-feedback"></div>
          </div>
        </div>

        <div className='row g-2 pt-3'>
          <div className='col-sm-6'>
            <label htmlFor="hct">HCT</label>
            <input type="text" className="form-control" name="hct" id="hct" placeholder="" value="" required />
            <div className="invalid-feedback"></div>
          </div>
          <div className='col-sm-6'>
            <label htmlFor="autres">Autres</label>
            <input type="text" className="form-control" name="autres" id="autres" placeholder="" value="" required />
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
                  <input type="text" className="form-control" name="ex_direct" id="ex_direct" placeholder="" value="" required />
                  <div className="invalid-feedback"></div>
                  </div>

                  <div className='pt-2'>
                  <label htmlFor="enrichssement">Enrichssement</label>
                  <input type="text" className="form-control" name="enrichssement" id="enrichssement" placeholder="" value="" required />
                  <div className="invalid-feedback"></div>
                  </div>
            </div>


            <div className="col-sm-4">
                  <h6 className='mb-1 '>URINES</h6>

                  <div className='pt-2'>
                  <label htmlFor="sediment_urinaire">Sediment Urinaine</label>
                  <input type="text" className="form-control" name="sediment_urinaire" id="sediment_urinaire" placeholder="" value="" required />
                  <div className="invalid-feedback"></div>
                  </div>

                  <div className='pt-2'>
                  <label htmlFor="sucre">Sucre</label>
                  <input type="text" className="form-control" name="sucre" id="sucre" placeholder="" value="" required />
                  <div className="invalid-feedback"></div>
                  </div>

                  <div className='pt-2'>
                  <label htmlFor="albuminurie">Albuminurie</label>
                  <input type="text" className="form-control" name="albuminurie" id="albuminurie" placeholder="" value="" required />
                  <div className="invalid-feedback"></div>
                  </div>
            </div>


            <div className="col-sm-4">
                <h6 className='mb-1 '>SANG</h6>

                <div className='pt-2'>
                <label htmlFor="ge">GE</label>
                <input type="text" className="form-control" name="ge" id="ge" placeholder="" value="" required />
                <div className="invalid-feedback"></div>
                </div>

                <div className='pt-2'>
                <label htmlFor="gf">GF</label>
                <input type="text" className="form-control" name="gf" id="gf" placeholder="" value="" required />
                <div className="invalid-feedback"></div>
                </div>

                <div className='pt-2'>
                <label htmlFor="snip">SNIP</label>
                <input type="text" className="form-control" name="snip" id="snip" placeholder="" value="" required />
                <div className="invalid-feedback"></div>
                </div>
                
                <div className='pt-2'>
                <label htmlFor="sang_autres">Autres</label>
                <input type="text" className="form-control" name="sang_autres" id="sang_autres" placeholder="" value="" required />
                <div className="invalid-feedback"></div>
                </div>
            </div>

          </div>

      </form>
      </div>
  )
}

export default LaboratoryPage