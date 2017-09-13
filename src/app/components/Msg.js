import React from 'react'


  const Msg = ({onClickStar, onSelect, messagesData}) =>{
  const msgSubject = messagesData.subject
  const starButton = messagesData.starred ? "star fa fa-star-o" : "star fa fa-star"
  const isMsgRead = messagesData.read ? "row message read" : "row message unread"
  const isSelectedRow = messagesData.selected ? "selected" : "no"
  const isSelected = messagesData.selected ? "checked" : ""
  const msgLabels = messagesData.labels.map((label, index) => {
    return <span  className="label label-warning" key={index}>{label}</span>
  })


    return(
      <div className={isMsgRead + " " + isSelectedRow} >
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
                <input type="checkbox" onChange={() => onSelect(messagesData)} checked={isSelected}/>
            </div>
            <div className="col-xs-2">
              <i className={starButton} onClick={() => onClickStar(messagesData)}></i>

            </div>
          </div>
        </div>
      <div className="col-xs-11">
          {msgLabels}
          {msgSubject}
      </div>
    </div>

  )
}


export default Msg
