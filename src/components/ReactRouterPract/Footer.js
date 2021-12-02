import React from 'react'
import styled from 'styled-components'

function Footer() {
    const MFooter = styled.footer`
    padding-top: .5em;
	padding-bottom: .5em;
	border: 1px solid #a2a2a2;
	background-color: #f4f4f4;
	box-shadow: 11px 11px 9px -11px rgba(0,0,0,0.53);
	border-radius: 5px;
    text-align:center;
    `
    return (
        <MFooter>yatin.com</MFooter>
    )
}

export default Footer
