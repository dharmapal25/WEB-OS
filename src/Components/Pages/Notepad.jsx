// // Notepad.jsx

// import React, { useEffect, useState } from 'react'
// import menu from "../../Images/Icons/menu.png"
// import add from "../../Images/Icons/file.png"
// import close from "../../Images/Icons/close.png"
// import "./Notepad.css"

// const Notepad = () => {

//     const [popup, setPopup] = useState(false);
//     const [menuIcon, setMenuIcon] = useState(false);
//     const [change, setChange] = useState("");
//     const [changetxt, setChangetxt] = useState("");
//     const [selectIdx, setSelectIdx] = useState(null);

//     // reload pe localStorage se data load hoga
//     const [filearr, setFilearr] = useState(() => {
//         const saved = localStorage.getItem("arr");
//         return saved ? JSON.parse(saved) : [];
//     });

//     const submitData = (e) => {
//         e.preventDefault();
//         const newFile = {
//             file: e.target.elements.file.value,
//             data: e.target.elements.data.value
//         }
//         setFilearr([newFile, ...filearr]);

//         setChange("");
//         setChangetxt("");
//         setPopup(false);
//     }

//     // Textarea content update
//     const handleContentChange =(e, index)=> {
//         const updatedArr = filearr.map((item, i) =>
//             i === index ? { ...item, data: e.target.value } : item
//         );
//         setFilearr(updatedArr);
//     }

//     useEffect(() => {
//         localStorage.setItem("arr", JSON.stringify(filearr));
//     }, [filearr]);

//     return (
//         <>
//             <form className='pop-up' style={{ display: (!popup) ? "none" : "" }} onSubmit={submitData}>

//                 <img src={close} className='cut icons-class' onClick={() => setPopup(false)}/>
//                 <input
//                     type="text"
//                     name='file'
//                     value={change}
//                     placeholder='Enter file name..'
//                     required
//                     onChange={(e) => setChange(e.target.value)}
//                 />
//                 <textarea
//                     name='data'
//                     className='textarea'
//                     value={changetxt}
//                     placeholder='Write something..'
//                     onChange={(e) => setChangetxt(e.target.value)}
//                 />
//                 <button className='save' type="submit">Save</button>
//             </form>

//             <div className={`main-notes-div menu-out`}>
//                 <div className="notes-div">

//                     <div className="filename-div">
//                         <div className="new-file-div">
//                             <img src={add} alt="" className="new-file icons-class" onClick={() => setPopup(true)} />

//                             <img src={menu} className="new-file icons-class" onClick={() => setMenuIcon(!menuIcon)} />

//                     </div>

//                     {filearr.map((item, index) => (
//                         <input
//                             key={index}
//                             type="text"
//                             className='filename'
//                             value={item.file}
//                             readOnly
//                             onClick={() => setSelectIdx(index)}
//                             style={{ cursor: "pointer", borderRadius: "5px", fontSize: "19px", background: selectIdx === index ? "#8b8b8bab" : "" }}
//                         />
//                     ))}
//                 </div>

//                 <div className="filecontants-div">

//                     {selectIdx !== null && filearr[selectIdx] && (
//                         <textarea
//                             className="filecontants"
//                             value={filearr[selectIdx].data}
//                             onChange={(e) => handleContentChange(e, selectIdx)}
//                         />
//                     )}
//                 </div>

//             </div>
//         </div >
//         </>
//     )
// }

// export default Notepad;



import React, { useEffect, useState } from 'react'
import menu from "../../Images/Icons/menu.png"
import add from "../../Images/Icons/file.png"
import close from "../../Images/Icons/close.png"
import "./Notepad.css"

const Notepad = () => {

    const [popup, setPopup] = useState(false)
    const [menuIcon, setMenuIcon] = useState(true)
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

    useEffect(() => {
        localStorage.setItem("arr", JSON.stringify(filearr))
    }, [filearr])

    return (
        <>
            <form className='pop-up' style={{ display: popup ? "" : "none" }} onSubmit={submitData}>
                <img src={close} className='cut icons-class' onClick={() => setPopup(false)} />
                <input
                    type="text"
                    name='file'
                    value={change}
                    placeholder='Enter file name..'
                    required
                    onChange={(e) => setChange(e.target.value)}
                />
                <textarea
                    name='data'
                    className='textarea'
                    value={changetxt}
                    placeholder='Write something..'
                    onChange={(e) => setChangetxt(e.target.value)}
                />
                <button className='save' type="submit">Save</button>
            </form>

            <div className="main-notes-div">
                <div className="notes-div">

                    <div className={`filename-div ${menuIcon ? "menu-open" : "menu-closed"}`}>
                        <div className="new-file-div">
                            <img src={add} alt="add" className="new-file icons-class" onClick={() => setPopup(true)} />
                            <img src={menu} alt="menu" className="new-file icons-class" onClick={() => setMenuIcon(!menuIcon)} />
                        </div>

                        {filearr.map((item, index) => (

                            <div className="files-box">

                                <p className='file-num' > {index + 1} </p>
                                <input
                                    key={index}
                                    type="text"
                                    className='filename'
                                    value={item.file}
                                    readOnly
                                    onClick={() => setSelectIdx(index)}
                                    style={{
                                        cursor: "pointer",
                                        borderRadius: "5px",
                                        fontSize: "19px",
                                        background: selectIdx === index ? "#8b8b8bab" : ""
                                    }}

                                />
                            </div>

                        ))}
                    </div>

                    <div className="filecontants-div">
                        {selectIdx !== null && filearr[selectIdx] && (
                            <textarea
                                className="filecontants"
                                value={filearr[selectIdx].data}
                                onChange={(e) => handleContentChange(e, selectIdx)}
                            />
                        )}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Notepad