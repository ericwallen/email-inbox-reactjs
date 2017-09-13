import React from 'react'





const Toolbar = ({onSelectAll, onDeselectAll, messagesData, everySelected, someSelected, noneSelected, markAsRead, markAsUnread}) =>{

  let selectionButton = ""


  if  (someSelected === true || everySelected === false) {
    selectionButton =   <button className="btn btn-default" onClick={() => onSelectAll(messagesData)}>
        <i className="fa fa-check-square-o"></i>
      </button>
  }

  if (everySelected === true) {
    selectionButton =   <button className="btn btn-default" onClick={() => onDeselectAll(messagesData)}>
        <i className="fa fa-minus-square-o"></i>
      </button>
  }

  if (noneSelected === true) {
    selectionButton =   <button className="btn btn-default" onClick={() => onSelectAll(messagesData)}>
        <i className="fa fa-square-o"></i>
      </button>
  }





  return(
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">2</span>
            unread messages
          </p>

          <a className="btn btn-danger" data-toggle="modal" data-target="#exampleModal">
            <i className="fa fa-plus"></i>
          </a>



{selectionButton}



          <button className="btn btn-default" onClick={() => markAsRead(messagesData)}>Mark As Read</button>

          <button className="btn btn-default" onClick={() => markAsUnread(messagesData)}>Mark As Unread</button>

          <select className="form-control label-select">
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select className="form-control label-select">
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button className="btn btn-default">
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>
  )
}




export default Toolbar
