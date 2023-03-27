import React from 'react'
import qr from '../../Assets/qrcode.png'
const FrontStandardpart = ({ TheamColor, colorTheam, formData }) => {
    return (
        <>
            <div className={`card my-4 `} style={{ backgroundColor: colorTheam.Background_Color }} >
                <div className="content front-card">
                    <div className="row">
                        <div className="amimated-box1" style={{ backgroundColor: colorTheam.Light_Color }}></div>
                        <div className="card_left">
                            <div>
                                <i class={`fa ${formData.logo} logo`} aria-hidden="true" style={{ color: colorTheam.Dark_Color }}> </i>
                                <h5 style={{ color: colorTheam.Main_Color }}>  {formData.componeyName} </h5>
                            </div>
                            <div className="amimated-box" style={{ backgroundColor: colorTheam.Light_Color }}>
                                <div className='code'>
                                    <img src={qr} className='img-fluid' alt="scabber" srcset="" />
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default FrontStandardpart