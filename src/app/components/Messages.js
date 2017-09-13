import React from 'react'
import Msg from './Msg.js'





const Messages = ({onClickStar, onSelect,  messagesData, dateTime}) => {
  return (

    <div>
        {messagesData.map(msg =>
          <Msg onClickStar={onClickStar} onSelect={onSelect} key={ msg.id } msgLabels={ msg.labels } messagesData={msg}/>
        )}
        {dateTime()}
    </div>
  )
}




export default Messages
