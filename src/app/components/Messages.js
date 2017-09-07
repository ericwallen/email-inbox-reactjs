import React from 'react'
import Msg from './Msg.js'





const Messages = ({onClickStar, messagesData}) => {
  return (

    <div>
        {messagesData.map(msg =>
          <Msg onClickStar={onClickStar} key={ msg.id } msgSubject={ msg.subject } msgStarred={ msg.starred } msgRead={ msg.read } msgLabels={ msg.labels } messagesData={msg}/>
        )}
    </div>
  )
}




export default Messages
