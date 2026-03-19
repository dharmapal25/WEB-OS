import React from 'react'
import "./Docs.css"
import docs from "../docs/NOTES.pdf"
const Docs = () => {
  return (
    <div className='docs-div' >
        <iframe src={docs} frameborder="0"></iframe>
        {/* <h1>hello</h1> */}
    </div>
  )
}

export default Docs