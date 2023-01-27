import React, { useState } from 'react'
import memeData from '../MemesData'
export default function MemeFormComponent() {
    const [memeImage, setMemeImage] = useState("")
    function getImageUrl() {
        const randomIndex = Math.floor(Math.random() * memeData.data.memes.length)
        const item = memeData.data.memes[randomIndex]
        setMemeImage(item.url)
    }
    return (
        <div className='main'>
            <div className='form'>
                <input type="text" placeholder='Top text'></input>
                <input type="text" placeholder='Bottom text'></input>
                <button onClick={getImageUrl}>Get a new meme image</button>
                <img src={memeImage} alt="" className='meme-image' />
            </div>
        </div>
    )
}
