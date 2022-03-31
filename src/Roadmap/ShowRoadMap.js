import React from 'react'

const ShowRoadMap = ({ShowRoadmapData}) => {
  return (
    <>
        {
            ShowRoadmapData.map((currElem)=>{
                const {id,description} = currElem;
                return <div className="roadmap wow fadeInLeft" key={id}>
                    <div className="roadmap-box text-center">
                        <div className="map-graphic">
                            <div className="small-round"><span></span></div>
                            <div className="v-row"></div>
                        </div>
                        <div className="roadmap-detail-box">
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            })
            }
    </>
  )
}

export default ShowRoadMap