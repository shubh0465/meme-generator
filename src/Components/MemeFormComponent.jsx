import React, { useEffect, useState } from 'react'
// import memeData from '../MemesData'
export default function MemeFormComponent() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })
    
    const [allMemes, setAllMemes] = useState({})
    useEffect(()=>{
        console.log("effect run")
        fetch("https://api.imgflip.com/get_memes")
        .then((res)=>res.json())
        .then((memeData)=>setAllMemes(memeData))
    },[])

    function getImageUrl() {
        const randomIndex = Math.floor(Math.random() * allMemes.data.memes.length)
        const item = allMemes.data.memes[randomIndex]
        setMeme(prevMemeData => ({
            ...prevMemeData,
            randomImage: item.url
        }))
    }
    function handleChange(event){
        setMeme(prevData =>({
            ...prevData,
            [event.target.name]:event.target.value
        }))
    }
    return (
        <div className='main'>
            <div className='form'>
                <input type="text" placeholder='Top text' name="topText" value={meme.topText} onChange={handleChange}></input>
                <input type="text" placeholder='Bottom text' name="bottomText" value={meme.bottomText} onChange={handleChange}></input>
                <button onClick={getImageUrl}>Get a new meme image</button>
            </div>
            <div className='meme'>
                    <img src={meme.randomImage} alt="" className='meme-image' />
                    <h1 className='top-text meme--text'>{meme.topText}</h1>
                    <h1 className='bottom-text meme--text'>{meme.bottomText}</h1>
            </div>
        </div>
    )
}
