import React from 'react'
import trollface from 'C:/Users/Bhuvnesh/Desktop/problems/meme-generator/src/images/Troll Face.png'

export default function Header() {
    return (
        <nav className='head-bar'>
            <img className='head-bar-img' src = {trollface}></img>
            <h2 className='head-bar-txt1'>
                Meme Generator
            </h2>
            <h4 className='head-bar-txt2'>
                React Course - Project 3
            </h4>
        </nav>
    )
}