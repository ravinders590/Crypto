import React from 'react'

const About = () => {
  return (
    <>
    <section className="work-part ptb-100 welcome-wrap bg-style" id='about' style={{backgroundImage:`url('in-equity-2-bg.png')`}}>
			<div className="container">
				<div className="row">
					<div className="col-md-12 wow fadeInUp">
						<div className="section-heading text-center pb-65">
							<label className="sub-heading black-color">Introduction</label>
							<h2 className="heading-title d-color">GSPT – <span className='span-color'>Token</span></h2>
							<p className="heading-des d-color">Global Smart Pay Token is a BEP20 Token and has an extensive community who are passionate about Binance based tokens. The Developers have come up with a formula that allows GSPT to soar in the charts, by providing an extensively secured and dynamic platform for all your trading needs.</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-7 text-center flex-align justify-center wow fadeInLeft">
						<div className="work-box" style={{display:'none'}}>
							<div className="work-box-bg" style={{backgroundImage:`url('images/work-petern.png')`}}></div>
							<img src="images/work-process.png" className="rotation-img" alt="Work Process" />
						</div>
						<div className="image-box">
							<img draggable="false" src="images/laptop.png" className="center-block img-responsive phone-img" alt="" />
							<img draggable="false" src="images/dots.png" className="center-block img-responsive rings " alt="" />
						</div>
					</div>
					<div className="col-md-5 flex-align wow fadeInRight">
						<div className="work-box">
							<h3 className="work-process-title pb-25 ">GSPT – Best Bib and Tucker – to buy and sell shares</h3>
							<p className="work-des pb-20 ">Couple of Reasons to shower your love to GSPT and be the part of GSPT Community’s plethora: </p>

							<ul className="check-list">
								<li><span><i className="fa fa-check" aria-hidden="true"></i></span> <p className=''>GSPT is a BEP20 – Binance based Token, which is offering for Cross-platform Crypto Currency Exchange, making it a pioneer in the Crypto Forex Trading for Cross Currency Exchange.</p></li>
								<li><span><i className="fa fa-check" aria-hidden="true"></i></span> <p className=''>Top notch security, having 18decimal hash, thus ensuring no backdoors, making it a highly recommended platform for Crypto Trading.</p></li>
								<li><span><i className="fa fa-check" aria-hidden="true"></i></span> <p className=''>Total Supply of GSPT – 70 Million - A great choice for Community</p></li>
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