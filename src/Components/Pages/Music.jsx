import React, { useState } from 'react'
import "./Music.css"

const spotifyArr = [
    "37i9dQZF1E4AnYVmEEo8ws",
    "37i9dQZF1DXdKTcyXUUm1i",
    "37i9dQZF1DWVylAeNMeLc5",
    "37i9dQZF1DX9L0PulSSl2E"
]

const Music = () => {
    const [loadedStates, setLoadedStates] = useState(
        Array(spotifyArr.length).fill(false)
    )

    const handleLoad = (index) => {
        setLoadedStates(prev => {
            const updated = [...prev]
            updated[index] = true
            return updated
        })
    }

    return (
        <div className='music-div'>
            {spotifyArr.map((id, index) => (
                <div className="iframe-div" key={id}>

                    {!loadedStates[index] && (
                        <div className="loading-screen">
                            <div className='load' />
                        </div>
                    )}

                    <iframe
                        onLoad={() => handleLoad(index)}
                        onError={() => handleLoad(index)}
                        style={{
                            opacity: loadedStates[index] ? 1 : 0
                        }}
                        className='musics'
                        data-testid="embed-iframe"
                        src={`https://open.spotify.com/embed/playlist/${id}?utm_source=generator&theme=0`}
                        // width="100%"
                        // height="352"
                        frameBorder="0"
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    />
                </div>
            ))}
        </div>
    )
}

export default Music