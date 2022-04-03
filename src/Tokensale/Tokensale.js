import React from 'react';
import Tokensalecontent from './Tokensalecontent';

const Tokensale = () => {

	const TokenData = [
		{
			id:1,
			image:'images/name.png',
			name:'Name',
			description:'Global Smart Pay'
		},
		{
			id:2,
			image:'images/symbol.png',
			name:'Symbol',
			description:'GSPT'
		},
		{
			id:3,
			image:'images/technology.png',
			name:'Technology',
			description:'Smart Chain(BEP20)'
		},
		{
			id:4,
			image:'images/total.png',
			name:'Total Supply',
			description:'70 Million'
		}
	];
  return (
    <>
        <section id="tokensale-part" className="token-sale bg-style-1 darkblue parallax ptb-100 bg-overlay" style={{backgroundImage:`url('images/tokenomics.jpg')`}}>
			<div className="container p-relative">
			<div className="row">
				<div className="col-lg-12 col-xs-12">
					<h2 className="heading-title title text-center mb-4">Tokenomics</h2>
				</div>
				<Tokensalecontent TokenData={TokenData}/>
				
				</div>
			</div>
		</section>
    </>
  )
}

export default Tokensale