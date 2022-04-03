import { Link } from '@material-ui/core'
import React from 'react'

const Footer = () => {

    const currentYear = new Date().getFullYear();
    const previousYear = currentYear - 1;
    

  return (
    <>
    <footer className="bg-pattern footer-bg ptb-100" style={{backgroundImage:`url('images/wave.png')`}}>
        <div className='container'>
            <div className="footer">
                <div className="row">
                    <div className="col-lg-5 col-md-6">
                        <div className="footer-logo pb-25">
                        <Link href="/"><img src="images/logo.png" alt="Cryptcon" /></Link>
                    </div>
                        <div className="footer-icon">
                            <ul>
                                <li><Link href="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                <li><Link href="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                <li><Link href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                                <li><Link href="#"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-link">
                            <ul>
                                <li><Link href="#about">About</Link></li>
                                <li><Link href="#features">Best Features</Link></li>
                                <li><Link href="#tokensale-part">Tokenomics</Link></li>
                                <li><Link href="#roadmap">Roadmap</Link></li>
                                <li><Link href="#">Whitepaper</Link></li>
                                <li><Link href="#faq">Faq</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="subscribe">
                            <div className="form-group">
                                <label>Subscribe to our Newsleter</label>
                                <input type="email" className="form-control" placeholder="Enter your email Address" />
                                <input type="submit" name="submit" value="Subscribe" className="submit" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <p>Copyright Global Smart Pay Token © {previousYear} - {currentYear}. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
	</footer>
    </>
  )
}

export default Footer