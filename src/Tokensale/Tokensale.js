import React from 'react';
import Tokensalecontent from './Tokensalecontent';

const Tokensale = () => {

	const TokenData = [
		{
			id:1,
			image:'images/name.png',
			name:'Name',
			description:'WTC UNiverse'
		},
		{
			id:2,
			image:'images/symbol.png',
			name:'Symbol',
			description:'WTCC'
		},
		{
			id:3,
			image:'images/technology.png',
			name:'Technology',
			description:'Smart Chain (Bep20)'
		},
		{
			id:4,
			image:'images/total.png',
			name:'Total Supply',
			description:'21 million (21,000,000)'
		}
	];
  return (
    <>
        <section id="tokensale-part" className="token-sale darkblue parallax ptb-100">
			<div className="container">
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