import React from 'react'
import Menu from '../Menu/Menu'
import { Link } from '@material-ui/core';

const Header = () => {
  return (
    <>
    
    <div id="preloader" style={{backgroundColor:`#000`}}>
		<img src='images/loader.png' alt=''/>
	</div>
    <div className="top-scroll transition">
    <Link href="#banner" className="scrollTo"><i className="fa fa-angle-up" aria-hidden="true"></i></Link>
		</div>	
    <header className="transition">
			<div className="container">
				<div className="row flex-align">
					<div className="col-lg-2 col-md-3 col-8">
						<div className="logo">
							<Link href="/"><img src="images/logo.png" className="transition" alt="Cryptcon" /></Link>
						</div>
					</div>
					<div className="col-lg-10 col-md-9 col-4 text-right">
						<div className="menu-toggle">
							<span></span>
						</div>
						<div className="menu">
							<Menu/>
							<div className="signin d-inline-block">
								<Link href="#" className="btn">Buy Now</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
    </>
  )
}

export default Header