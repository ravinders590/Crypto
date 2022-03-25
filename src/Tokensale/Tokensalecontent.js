import React, { useState } from 'react'

const Tokensalecontent = ({TokenData}) => {

    const [token,setToken] = useState('0x7Ce280570D3cbbCCa88238995466a503C73AC642');

    const copyToClipboard = ()=>{
          
        var copyText = document.getElementById("tokken-link");

        copyText.select();
        copyText.setSelectionRange(0, 99999); 

        navigator.clipboard.writeText(copyText.value);
        setToken(copyText.value)
    }


  return (
    <>
    {
        TokenData.map((currElem)=>{
            const{id,image,name,description} = currElem;
            return <div className="col-lg-3 col-xs-12" key={id}>
                <div className="wpb_wrapper ">
                    <div className="img-icon">
                        <img src={image} alt="" />
                    </div>
                    <div className="vc_custom_heading">{name}</div>
                    <div className="counter__item-value numscroller text-center">
                        <div className="counter">{description}</div>
                    </div>
                </div>
            </div>
        })
    }
        <div className="col-lg-12 col-xs-12">
            <div className="tokken-address">
                <label htmlFor="tokken-link">Tokken Address:</label>
                <input id="tokken-link" type="text" className="form-control" defaultValue={token} placeholder="Tokken Address.." />
                <button onClick={copyToClipboard} className="btn btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-copy">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                </button>
            </div>
        </div>
    </>
  )
}

export default Tokensalecontent