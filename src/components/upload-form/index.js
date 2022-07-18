import React, { useState } from 'react'
import './index.css'

export const Uploadform = () => {
    const [text, setText] = useState('')
    const [file, setFile] = useState()
    const [responseMessage, setResponseMessage] = useState('')
    const [color, setcolor] = useState('')

    const onChange = (e) => {
        const file = e.target.files[0];
        setFile(file) 
        setText(file.name)
    }

    const submitForm = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('file', file)
 
        try {
            const response = await fetch('http://localhost:3000/files', {
                method: 'POST',
                body: formData
                })

            setResponseMessage(response.message)
            setcolor('#16a34a')
        } catch(error) {
            setResponseMessage(error)
            setcolor('#ef4444')
        }
    }

    return (
        <div className="content">
            <form onSubmit={submitForm}>
                <div>
                    <input className='text-input' type="text" placeholder="Select a file to be uploaded" value={text} readOnly  />        
                    <label className='file-button' htmlFor="fileInput">Choose a file<input id="fileInput" className='file-input' type="file"  onChange={onChange}/></label>
                </div>
                <p style={{ color: `${color}` }}>{responseMessage}</p>
                <div className='submit-button'>
                    <button className='upload-button' type='submit'>Upload</button>
                </div>
            </form>
        </div>
    )
}