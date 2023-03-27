import React from 'react'

const BackStandardpart = ({ TheamColor, colorTheam, formData }) => {
  return (
   <>
    <div className={`card my-4 `} style={{backgroundColor:colorTheam.Background_Color}} >
                <div className="content front-card">
                    <div className="row">

                        <div className="col-5 card_left">
                            <div>
                                <i class={`fa ${formData.logo} logo`} aria-hidden="true" style={{ color: colorTheam.Dark_Color }}> </i>
                                <h5 style={{ color: colorTheam.Main_Color ,fontSize:"15px",marginTop:"5px"}}>  {formData.componeyName} </h5>
                            </div>
                        </div>

                        <div className="col-7  card_right">
                            <div>
                                <h5 style={{ color: colorTheam.Main_Color }}> {formData?.fullName} </h5>
                                <p style={{ color: colorTheam.Light_Color }}> {formData?.designation}</p>
                            </div>
                            <div className='bottom' style={{ color: colorTheam.Light_Color }}>
                                <i class="fa fa-phone" aria-hidden="true"></i>{formData?.Contact_number} <br />
                                <i class="fa fa-envelope" aria-hidden="true"></i> {formData.Email} <br />
                                <i class="fa fa-globe" aria-hidden="true"></i>{formData.website}
                            </div>

                        </div>
                        <div className="amimated-box1" style={{backgroundColor:colorTheam.Light_Color}}></div>
                    </div>
                </div>
            </div>
   </>
  )
}

export default BackStandardpart