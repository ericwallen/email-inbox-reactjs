import React from 'react'


  const Msg = ({msgSubject, onClickStar, msgStarred, messagesData}) =>{
  const starButton = msgStarred ? "star fa fa-star-o" : "star fa fa-star"

    return(
      <div className="row message unread">
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
          {msgSubject}
      </div>
    </div>

  )
}







export default Msg
