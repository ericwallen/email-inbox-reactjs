import React from 'react'
import Msg from './Msg.js'




const Messages = ({onGreet, onClickStar, msgStarred, messagesData}) => {
  return (

    <div>
        {messagesData.map(msg =>
          <Msg onGreet={onGreet} onClickStar={onClickStar} key={ msg.id } msgSubject={ msg.subject } msgRead={ msg.read } msgStarred={ msg.starred } messagesData={msg}/>
        )}
        <button className="btn btn-default" onClick={onGreet}>
          in child
        </button>
    </div>
  )
}




export default Messages
