import React from 'react'

const About = () => {
  return (
    <>
    <section className="work-part darkblue ptb-100" id='about'>
			<div className="container">
				<div className="row">
					<div className="col-md-12 wow fadeInUp">
						<div className="section-heading text-center pb-65">
							<h2 className="heading-title">What is cryptcon?</h2>
							<p className="heading-des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6 text-center flex-align justify-center wow fadeInLeft">
						<div className="work-box">
							<div className="work-box-bg" style={{backgroundImage:`url('images/work-petern.png')`}}></div>
							<img src="images/work-process.png" className="rotation-img" alt="Work Process" />
						</div>
					</div>
					<div className="col-md-6 flex-align wow fadeInRight">
						<div className="work-box">
							<h3 className="work-process-title pb-25">We’ve built a platform to buy and sell shares.</h3>
							<p className="work-des pb-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>

							<ul className="check-list">
								<li><span><i className="fa fa-check" aria-hidden="true"></i></span> <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p></li>
								<li><span><i className="fa fa-check" aria-hidden="true"></i></span> <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p></li>
								<li><span><i className="fa fa-check" aria-hidden="true"></i></span> <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
    </>
  )
}

export default About