import React from 'react';
import { Link } from '@material-ui/core'

const Banner = () => {
  return (
    <>
    <section className="home-banner parallax" id="banner" style={{backgroundImage:`url('images/banner-bg.png')`}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 position-u flex-align wow fadeInLeft">
                    <div className="banner-contain">
                        <h1 className="banner-heading">Global Smart Pay <span className='span-color'>The&nbsp;Gateway to The Future</span></h1>
                        <p className="banner-des">Snap off all your Trade Worries and make the money while you Chill, with the great support and advise of Experienced Crypto Financial Experts of Global Smart Pay.</p>
                        <Link href="#about" className="btn">Learn more</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Banner