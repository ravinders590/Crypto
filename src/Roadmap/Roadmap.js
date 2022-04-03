import React from 'react';
import ShowRoadMap from './ShowRoadMap'

const Roadmap = () => {
	const ShowRoadmapData = [
		{
			id:1,
			description:'Starting of Global Smart Pay'
		},
		{
			id:2,
			description:'Launching Of GSPT - Global Smart Pay Token'
		},
		{
			id:3,
			description:'Launching Of Staking Program'
		},
		{
			id:4,
			description:'Listing on Leading Exchanges'
		},
		{
			id:5,
			description:'Listing on Binance'
		},
		{
			id:6,
			description:'Launching Of Own Exchange'
		},
		{
			id:7,
			description:'Future Payment Gateway For Forex Industry'
		}

	];	
  return (
    <>
    <section className="timeline white-bg ptb-100 bg-style-1" id="roadmap" style={{backgroundImage:`url('images/bg-image.jpg')`}}>
			<div className="container">
				<div className="row">
					<div className="col-md-12 wow fadeInUp">
						<div className="section-heading text-center pb-65">
							<label className="sub-heading">roadmap</label>
							<h2 className="heading-title">The Timeline</h2>
						</div>
					</div>
				</div>
				<div className="main-roadmap">
					<div className="row">
						<div className="col-md-12">
							<div className="h-border wow fadeInLeft"></div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="roadmap-slider owl-carousel">
								<ShowRoadMap ShowRoadmapData={ShowRoadmapData}/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </>
  )
}

export default Roadmap