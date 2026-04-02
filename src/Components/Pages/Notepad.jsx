import React, { useEffect, useState } from 'react'
import add from "../../Images/Icons/file.png"
import close from "../../Images/Icons/close.png"
import "./Notepad.css"

const Notepad = () => {

    const [popup, setPopup] = useState(false)
    const [change, setChange] = useState("")
    const [changetxt, setChangetxt] = useState("")
    const [selectIdx, setSelectIdx] = useState(null)

    const [filearr, setFilearr] = useState(() => {
        const saved = localStorage.getItem("arr")
        return saved ? JSON.parse(saved) : []
    })

    const submitData = (e) => {
        e.preventDefault()
        const newFile = {
            file: e.target.elements.file.value,
            data: e.target.elements.data.value
        }
        setFilearr([newFile, ...filearr])
        setChange("")
        setChangetxt("")
        setPopup(false)
    }

    const handleContentChange = (e, index) => {
        const updatedArr = filearr.map((item, i) =>
            i === index ? { ...item, data: e.target.value } : item
        )
        setFilearr(updatedArr)
    }

    const deleteFile = (index) => {
        const updatedArr = filearr.filter((_, i) => i !== index)
        setFilearr(updatedArr)
        if (selectIdx === index) {
            setSelectIdx(null)
        } else if (selectIdx > index) {
            setSelectIdx(selectIdx - 1)
        }
    }

    useEffect(() => {
        localStorage.setItem("arr", JSON.stringify(filearr))
    }, [filearr])

    return (
        <>
            <form className='pop-up' style={{ display: popup ? "" : "none" }} onSubmit={submitData}>
                <img src={close} className='cut icons-class' onClick={() => setPopup(false)} alt="close" />
                <input
                    type="text"
                    name='file'
                    value={change}
                    placeholder='Enter file name..'
                    required
                    autoFocus
                    onChange={(e) => setChange(e.target.value)}
                />
                <textarea
                    name='data'
                    className='textarea'
                    value={changetxt}
                    placeholder='Write something..'
                    onChange={(e) => setChangetxt(e.target.value)}
                />
                <button className='save' type="submit">Save File</button>
            </form>

            <div className="main-notes-div">
                <div className="notes-div">

                    <div className="filename-div">
                        <div className="new-file-div">
                            <img src={add} alt="add" className="new-file icons-class" onClick={() => setPopup(true)} title="New File" />
                        </div>

                        {filearr.length === 0 ? (
                            <div style={{ padding: '15px', textAlign: 'center', color: '#7a7a7a', fontSize: '12px' }}>
                                No files yet. Create one!
                            </div>
                        ) : (
                            filearr.map((item, index) => (
                                <div key={index} className='file-item'>
                                    <input
                                        type="text"
                                        className='filename'
                                        value={item.file}
                                        readOnly
                                        onClick={() => setSelectIdx(index)}
                                        title={item.file}
                                        style={{
                                            cursor: "pointer",
                                            background: selectIdx === index
                                                ? "linear-gradient(135deg, #5a8fff 0%, #4a7fff 100%)"
                                                : ""
                                        }}
                                    />
                                    <button
                                        className='file-delete-btn'
                                        onClick={() => deleteFile(index)}
                                        title="Delete file"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="filecontants-div">
                        {selectIdx !== null && filearr[selectIdx] ? (
                            <>
                                <textarea
                                    className="filecontants"
                                    value={filearr[selectIdx].data}
                                    onChange={(e) => handleContentChange(e, selectIdx)}
                                    placeholder="Start typing..."
                                />
                            </>
                        ) : (
                            <div style={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#5a5a5a',
                                fontSize: '18px',
                                textAlign: 'center',
                                padding: '20px'
                            }}>
                                <p>Select a file to start editing<br /><span style={{ fontSize: '12px', marginTop: '10px' }}>or create a new one</span></p>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Notepad