import React from 'react'
import Showfeatures from './Showfeatures'
const Features = () => {
	const FeatureData = [
		{
			id:1,
			image:'images/feature-1.png',
			name:'Safe & Secure',
			link:'/',
			description:'Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, labore et.Lorem ipsum dolor sit amet.'
		},
		{
			id:2,
			image:'images/feature-2.png',
			name:'Early Bonus',
			link:'/',
			description:'Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, labore et.Lorem ipsum dolor sit amet.'
		},
		{
			id:3,
			image:'images/feature-3.png',
			name:'Univarsal Access',
			link:'/',
			description:'Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, labore et.Lorem ipsum dolor sit amet.'
		},
		{
			id:4,
			image:'images/feature-4.png',
			name:'Secure Storage',
			link:'/',
			description:'Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, labore et.Lorem ipsum dolor sit amet.'
		},
		{
			id:5,
			image:'images/feature-5.png',
			name:'Low Cost',
			link:'/',
			description:'Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, labore et.Lorem ipsum dolor sit amet.'
		},
		{
			id:6,
			image:'images/feature-6.png',
			name:'Several Profit',
			link:'/',
			description:'Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, labore et.Lorem ipsum dolor sit amet.'
		}
	]
  return (
    <>
        <section className="feature-part skyblue bg-pattern pt-100 pb-10" style={{backgroundImage:`url('images/wave.png')`}} id="features">
			<div className="container">
				<div className="row">
					<div className="col-md-12 wow fadeInUp">
						<div className="section-heading text-center pb-65">
							<label className="sub-heading">cryptcon Feature</label>
							<h2 className="heading-title">Best Features</h2>
							<p className="heading-des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
						</div>
					</div>
				</div>
				<div className="row">
					<Showfeatures FeatureData={FeatureData}/>
				</div>
			</div>
		</section>
    </>
  )
}

export default Features