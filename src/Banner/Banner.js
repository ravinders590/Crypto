import React from 'react';
import { Link } from '@material-ui/core'

const Banner = () => {
  return (
    <>
    <section className="home-banner parallax" id="banner" style={{backgroundImage:`url('images/banner-bg.svg')`}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 position-u flex-align wow fadeInLeft">
                    <div className="banner-contain">
                        <h1 className="banner-heading">Invest In GSPT The Gateway to The Future</h1>
                        <p className="banner-des">Snap off all your Trade Worries and make the money while you Chill, with the great support and advise of Experienced Crypto Financial Experts of Global SmartPay Trade.</p>
                        <Link href="#" className="btn">Learn more</Link>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 position-u wow fadeInRight">
                    <div className="banner-img">
                        <img src="images/banner-img.png" alt="banner" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Banner