import React from 'react'



class Msg extends React.Component{

  constructor(props) {
     super(props)
     this.clickStar = this.clickStar.bind(this)
     this.state = {
       msgStarred: props.msgStarred
     }
   }

  clickStar () {
     this.setState ({ msgStarred: !this.state.msgStarred })
   }


  render(){
    const starButton = this.state.msgStarred ? <i className="star fa fa-star-o" onClick={this.clickStar}></i> : <i className="star fa fa-star" onClick={this.clickStar}></i>

    return(
      <div className="row message unread">
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
                <input type="checkbox" />
            </div>
            <div className="col-xs-2">

            {starButton}
            </div>
          </div>
        </div>
      <div className="col-xs-11">

          {this.props.msgSubject}



      </div>
    </div>

  )
}
}






export default Msg
