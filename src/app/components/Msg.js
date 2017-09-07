import React from 'react'


  const Msg = ({msgSubject, onClickStar, msgStarred, msgRead, messagesData, msgLabels}) =>{

  const starButton = msgStarred ? "star fa fa-star-o" : "star fa fa-star"
  const isMsgRead = msgRead ? "row message read" : "row message unread"
  const showMsgLabels = msgLabels.map(function(x){
    return <span className="label label-warning">{x}</span>
  })


    return(
      <div className={isMsgRead}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
                <input type="checkbox" />
            </div>
            <div className="col-xs-2">
              <i className={starButton} onClick={() => onClickStar(messagesData)}></i>

            </div>
          </div>
        </div>
      <div className="col-xs-11">
          {showMsgLabels}
          {msgSubject}
      </div>
    </div>

  )
}







export default Msg
