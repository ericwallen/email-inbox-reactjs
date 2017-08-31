import React from 'react'
import messagesData from './MessagesData.js'
import Msg from './Msg.js'



class Messages extends React.Component{
  render(){
  return (
    <div className="collection">
        {messagesData.map(msg => <Msg key={ msg.id } msgSubject={ msg.subject } msgRead={ msg.read } msgStarred={ msg.starred }/>) }
    </div>
  )
}
}



export default Messages
