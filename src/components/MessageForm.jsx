import React from 'react';
import { useState } from 'react'
import { sendMessage, isTyping } from 'react-chat-engine'
import { SendOutlined, PictureOutlined } from '@ant-design/icons'

function MessageForm(props) {
  const { chatId, creds } = props

  const [value, setvalue] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    const text = value.trim();
    if (text.length > 0) {
      sendMessage(creds, chatId, { text })
    }
    setvalue('')

  }
  const handleChage = (event) => {
    setvalue(event.target.value)
    isTyping(props, chatId)

  }
  const handleUpload = (event) => {
    setvalue(event.target.value)
    sendMessage(creds, chatId, { files: event.target.files, text: "" })
    setvalue('')
  }
  
  return (
    <form className='message-form' onSubmit={handleSubmit}>
      <input className='message-input' placeholder='send message' value={value} onChange={handleChage} onSubmit={handleSubmit} />
      <label htmlFor="upload-button">
        <span className='image-button'>
          <PictureOutlined />

        </span>
        <input
          type='file'
          multiple={false}
          id='upload-button'
          style={{ display: 'none' }}
          onChange={handleUpload}

        />
        <button type='submit' className='send-button'>
          <SendOutlined className='send-icon' />
        </button>
      </label>

    </form>
  );
}

export default MessageForm;
