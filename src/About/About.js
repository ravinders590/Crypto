import React from 'react'

const About = () => {
  return (
    <>
    <section className="work-part darkblue ptb-100" id='about'>
			<div className="container">
				<div className="row">
					<div className="col-md-12 wow fadeInUp">
						<div className="section-heading text-center pb-65">
							<h2 className="heading-title">GSPT – BEP20 Token</h2>
							<p className="heading-des">Global SmartPay Token is a BEP20 Token and has an extensive community who are passionate about Binance based tokens. The Developers have come up with a formula that allows GSPT to soar in the charts, by providing an extensively secured and dynamic platform for all your trading needs.</p>
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
							<h3 className="work-process-title pb-25">GSPT – Best Bib and Tucker – to buy and sell shares</h3>
							<p className="work-des pb-20">Couple of Reasons to shower your love to GSPT and be the part of GSPT Community’s plethora: </p>

							<ul className="check-list">
								<li><span><i className="fa fa-check" aria-hidden="true"></i></span> <p>GSPT is a BEP20 – Binance based Token, which is offering for Cross-platform Crypto Currency Exchange, making it a pioneer in the Crypto Forex Trading for Cross Currency Exchange.</p></li>
								<li><span><i className="fa fa-check" aria-hidden="true"></i></span> <p>Top notch security, having 18decimal hash, thus ensuring no backdoors, making it a highly recommended platform for Crypto Trading.</p></li>
								<li><span><i className="fa fa-check" aria-hidden="true"></i></span> <p>Total Supply of GSPT – 70 Million - a great choice for Community</p></li>
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