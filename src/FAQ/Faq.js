import { Link } from '@material-ui/core'
import React from 'react'

const Faq = () => {
  return (
    <>
    <section className="faq-part skyblue pt-100 bg-style-1" id='faq' style={{backgroundImage:`url('images/faq-bg.png')`}}>
			<div className="container">
				<div className="row">
					<div className="col-md-12 wow fadeInUp">
						<div className="section-heading text-center pb-65">
							<label className="sub-heading">Faqs</label>
							<h2 className="heading-title">Frequently Asked questions</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 wow fadeInUp">
						<ul className="nav nav-tab Frequently-tabs pb-55">
							<li>
							    <Link className="tab-link active" href="#" data-tab="tab-1">general</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 wow fadeInUp">
						<div className="tab-content">
						  	<div className="tab-panel active" id="tab-1">
						  		<div className="row">
						  			<div className="col-md-6 pb-65">
						  				<div className="faq-tab">
						  					<Link href="/" className="qus-title">What is GSPT?</Link>
						  					<p className="qus-des pt-10">GSPT is a Binance based Smart Chain System, a Decentralised system, meaning it is not issued or backed by a central authority such as a central bank or government. Instead, cryptocurrencies run across a network of computers to buy/sell as well as monitor all the exchanges.</p>
						  				</div>
						  			</div>
						  			<div className="col-md-6 pb-65">
						  				<div className="faq-tab">
						  					<Link href="/" className="qus-title">How Does GSPT Work?</Link>
						  					<p className="qus-des pt-10">Usually, when you buy cryptocurrencies via an exchange, you purchase the coins themselves. You’ll need to create an exchange account, put up the full value of the asset to open a position, and store the cryptocurrency tokens in your own wallet until you’re ready to sell. GSPT, being an advanced Exchange Trading system, provides the investors with different analytics as well as Expert Advises, to monitor all the exchanges as well as encash great profits from the trade. All you need is a Crypto-trading account and you can start the trading right away</p>
						  				</div>
						  			</div>
						  			<div className="col-md-6 pb-65">
						  				<div className="faq-tab">
						  					<Link href="/" className="qus-title">What Cryptocurrencies Can I Use To Purchase GSPT Tokens?</Link>
						  					<p className="qus-des pt-10">Interested investors can use any of the Token available on the BscSCAN to buy/purchase the GSPT Token, as the developers have ensured the ease of cross- currency purchases as well.</p>
						  				</div>
						  			</div>
						  			<div className="col-md-6 pb-65">
						  				<div className="faq-tab">
						  					<Link href="/" className="qus-title">How Do I Get Benefit From GSPT Token?</Link>
						  					<p className="qus-des pt-10">Down the line, GSPT will not just only be featuring for the Exchange and Trading purposes, but also, it will facilitate the investors for utility-based exchanges as well. 
											Some of the upcoming plans for incorporating the GSPT systems are:
											<ul className='gspt-type'>
												<li>Exchanges</li>
												<li>Gaming</li>
												<li>eCommerce</li>
												<li>Healthcare</li>
											</ul>
											</p>
						  				</div>
						  			</div>
						  		</div>
						  	</div>
						</div>
					</div>
				</div>
			</div>	
		</section>
    </>
  )
}

export default Faq