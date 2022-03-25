import React from 'react';
import { Link } from '@material-ui/core'

const Menu = () => {
  return (
    <>
    <ul className="d-inline-block">
        <li>
            <Link href="#about">About</Link>
        </li>
        <li>
            <Link href="#features">Best Features</Link>
        </li>
        <li>
            <Link href="#tokensale-part">Tokenomics</Link>
        </li>
        <li><Link href="#roadmap">Roadmap</Link></li>
        <li><Link href="#whitepaper">Whitepaper</Link></li>
    </ul>
    </>
  )
}

export default Menu