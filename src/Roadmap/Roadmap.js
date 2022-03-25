import React from 'react';
import ShowRoadMap from './ShowRoadMap'

const Roadmap = () => {
	const ShowRoadmapData = [
		{
			id:1,
			date:'March 2021',
			description:'Lorem Ipsum has been the industry/\'s standard dummy text'
		},
		{
			id:2,
			date:'April 2021',
			description:'Lorem Ipsum has been the industry/\'s standard dummy text'
		},
		{
			id:3,
			date:'May 2021',
			description:'Lorem Ipsum has been the industry/\'s standard dummy text'
		},
		{
			id:4,
			date:'August 2021',
			description:'Lorem Ipsum has been the industry/\'s standard dummy text'
		}
	];	
  return (
    <>
    <section className="timeline darkblue ptb-100" id="roadmap">
			<div className="container">
				<div className="row">
					<div className="col-md-12 wow fadeInUp">
						<div className="section-heading text-center pb-65">
							<label className="sub-heading">roadmap</label>
							<h2 className="heading-title">The Timeline</h2>
							<p className="heading-des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
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