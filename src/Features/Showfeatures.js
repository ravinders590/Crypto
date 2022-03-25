import React from 'react';
import { Link } from '@material-ui/core';

const Showfeatures = ({FeatureData}) => {
  return (
    <>
        {
            FeatureData.map((currElem)=>{
                const {id,image,name,link,description} = currElem;
                return  <div className="col-md-4 wow fadeInUp pb-80" key={id}>
                            <div className="feature-box">
                                <div className="feature-icon">
                                    <img src={image} alt={name} />
                                </div>
                                <div className="feature-contain pt-25">
                                    <Link href={link} className="feature-title">{name}</Link>
                                    <p className="feature-des">{description}</p>
                                </div>
                            </div>
                        </div>
            })
        }
       
    </>
  )
}

export default Showfeatures