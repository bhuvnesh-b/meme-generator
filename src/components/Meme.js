import React from 'react'

export default function Meme() {

    const meme = {
        memeimg : "",
        memetxtup : "",
        memetxtdn : "",
    }

    const[memedata , changememedata] = React.useState({});
    const [currmeme , changememe] = React.useState(meme);


    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => changememedata(data.data.memes))
    } , [])

    function changeimg() {
        const memesArray = memedata
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        
        changememe(
            prevmeme => ({
                ...prevmeme,
                memeimg : memesArray[randomNumber].url,
            })
        )
    }

    function handlechange(event) {
        const {name , value} = event.target

        changememe(
            prevmeme => ({
                ...prevmeme,
                [name] : value
            })
        )
    }
    return (
        <main>
        <div className='meme-main'>
            <form className='meme-form'>
               <input type="text" className='meme-wd1' name = "memetxtup" value = {currmeme.memetxtup} onChange = {handlechange}></input>
               <input type='text' className='meme-wd2' name = "memetxtdn" value = {currmeme.memetxtdn} onChange = {handlechange}></input>
               <button type = "button" className='meme-btn' onClick = {changeimg}>
                Get a new meme image😼
               </button>
            </form>
            <div className='meme'>
                <img src= {currmeme.memeimg} className='meme-img' />
                <h2 className='memeimgtxt a1'>{currmeme.memetxtup}</h2>
                <h2 className='memeimgtxt a2'>{currmeme.memetxtdn}</h2>
            </div>
        </div>
        </main>
    )
}