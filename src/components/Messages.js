import React from 'react'
import MessagesData from './MessagesData.js'
const Messages = () => {
  return(
    <div>
    {MessagesData.map(x =>

      <div className="row message unread">
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" />
            </div>
            <div className="col-xs-2">
              <i className="star fa fa-star-o"></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          <a href="#">
            {x.subject}
          </a>
        </div>
      </div>
    )}
    </div>
  )
}

export default Messages
