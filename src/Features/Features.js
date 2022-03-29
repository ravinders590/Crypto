import React from 'react'
import Showfeatures from './Showfeatures'
const Features = () => {
	const FeatureData = [
		{
			id:1,
			image:'images/feature-1.png',
			name:'Safe & Secure',
			link:'/',
			description:'Being 18 Decimal hash system, GSPT provides secured platform for Crypto based Forex Trading'
		},
		{
			id:2,
			image:'images/feature-2.png',
			name:'Colossal Community',
			link:'/',
			description:'Multitude of Features offered by GSPT is making it a best choice for Investors and thus has attracted a colossal community from far-flung regions. So, Come, join and be the part of this massive community.'
		},
		{
			id:3,
			image:'images/feature-3.png',
			name:'Universal Access',
			link:'/',
			description:'Being highly secured and user friendly, GSPT allows each and every Crypto investors to	access as well as monitor the on-going Exchanges through BscSCAN'
		},
		{
			id:4,
			image:'images/feature-4.png',
			name:'Secure Storage & Huge Supply',
			link:'/',
			description:'Being BEP-20 system, GSPT has a secured Storage System and has 70Million of token supply.'
		}
	]
  return (
    <>
        <section className="feature-part skyblue bg-pattern pt-100 pb-10" style={{backgroundImage:`url('images/wave.png')`}} id="features">
			<div className="container">
				<div className="row">
					<div className="col-md-12 wow fadeInUp">
						<div className="section-heading text-center pb-65">
							<label className="sub-heading">GSPT Feature</label>
							<h2 className="heading-title">Best Features</h2>
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