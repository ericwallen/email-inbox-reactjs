import React from 'react'
import Toolbar from './Toolbar.js'
import Messages from './Messages.js'
const baseURL = "https://react-inbox-api.herokuapp.com/api"
var moment = require('moment');

class Home extends React.Component {
    constructor() {
       super()
       this.state = {
         messages: [],
         everySelected: false,
         someSelected: false,
         noneSelected: true
     }
     }

     dateTime(){
       var getTime = moment().format();
       return getTime
     }


     async componentDidMount() {
       const response = await fetch(`${baseURL}/messages`)
       const json = await response.json()
       this.setState({messages: json._embedded.messages})
     }


     onClickStar(messages) {
       var id = messages.id
       const data = {
         "messageIds": [id],
         "command":  "star",
         "star": !messages.starred
       }
       const settings = {
         method: 'PATCH',
         headers: {
           'content-type': 'application/json'
         },
         body: JSON.stringify(data)
       }
       fetch(`${baseURL}/messages`, settings)
        .then(data => {
          this.setState((prevState) => {
            prevState.messages[id -1].starred = !prevState.messages[id -1].starred
          })

        })
    }

    onSelect(messages) {
      let updateMessages = []

      this.state.messages.map(msg => {
        if (msg.id === messages.id){
          msg.selected = !msg.selected
          msg.id = messages.id
          updateMessages = msg
          return msg
        } else{
          return "nothing was found"
        }
      })

      let index = messages.id -1

      const clone = [
          ...this.state.messages.slice(0, index),
          updateMessages,
          ...this.state.messages.slice(index +1),
      ]


      this.setState({messages: clone})


      let selectedForEach = []

      this.state.messages.forEach(item =>
      selectedForEach.push(item.selected)
      )

      let someSelected = selectedForEach.some(item => item === true)
      let everySelected = selectedForEach.every(item => item === true)


      if (everySelected === true) {
      this.setState({everySelected: true})
      }

      if (everySelected === false){
      this.setState({everySelected: false})
      }

      if (someSelected === true ){
      this.setState({someSelected: true})
      this.setState({noneSelected: false})
      }

      if (someSelected === false) {
      this.setState({someSelected: false})
      this.setState({noneSelected: true})
      }
    }


    onSelectAll(messages){
      let updateMessages = []

      this.state.messages.map((msg, index) => {
          msg.selected = true
          msg.key = msg.id
          updateMessages = msg
          console.log(msg);
          return msg
      })

      const clone = [
          ...this.state.messages.slice(0),
          updateMessages,
          ...this.state.messages.slice(-1),
      ]

      this.setState({messages: clone})

      let selectedForEach = []

      this.state.messages.forEach(item =>
      selectedForEach.push(item.selected)
      )

      let someSelected = selectedForEach.some(item => item === true)
      let everySelected = selectedForEach.every(item => item === true)


      if (everySelected === true) {
      this.setState({everySelected: true})
      }

      if (everySelected === false){
      this.setState({everySelected: false})
      }

      if (someSelected === true ){
      this.setState({someSelected: true})
      this.setState({noneSelected: false})
      }

      if (someSelected === false) {
      this.setState({someSelected: false})
      this.setState({noneSelected: true})
      }
    }




    onDeselectAll(messages){
      let updateMessages = []

      this.state.messages.map((msg, index) => {
          msg.selected = false
          msg.key = msg.id
          updateMessages = msg
          console.log(msg);
          return msg
      })

      const clone = [
          ...this.state.messages.slice(0),
          updateMessages,
          ...this.state.messages.slice(-1),
      ]

      this.setState({messages: clone})

      let selectedForEach = []

      this.state.messages.forEach(item =>
      selectedForEach.push(item.selected)
      )

      let someSelected = selectedForEach.some(item => item === true)
      let everySelected = selectedForEach.every(item => item === true)


      if (everySelected === true) {
      this.setState({everySelected: true})
      }

      if (everySelected === false){
      this.setState({everySelected: false})
      }

      if (someSelected === true ){
      this.setState({someSelected: true})
      this.setState({noneSelected: false})
      }

      if (someSelected === false) {
      this.setState({someSelected: false})
      this.setState({noneSelected: true})
      }
    }


    markAsRead(messages){

    let updateMessages = []
    let ids = []

      this.state.messages.map((msg, index) => {
          if (msg.selected){
          msg.read = true
          ids.push(msg.id)
        }
        updateMessages = msg
        return msg
      })

      const clone = [
          ...this.state.messages.slice(0),
          updateMessages,
          ...this.state.messages.slice(-1),
      ]

      this.setState({messages: clone})
      let data = {
        "messageIds": ids,
        "command":  "read",
        "read": true
      }
      let settings = {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      fetch(`${baseURL}/messages`, settings)
       .then(data => {})

    }

    markAsUnread(messages){
      let updateMessages = []
      let ids = []

      this.state.messages.map((msg, index) => {
          if (msg.selected){
          msg.read = false
          ids.push(msg.id)
        }
        updateMessages = msg
        return msg
      })

      const clone = [
          ...this.state.messages.slice(0),
          updateMessages,
          ...this.state.messages.slice(-1),
      ]

      this.setState({messages: clone})

      let data = {
        "messageIds": ids,
        "command":  "read",
        "read": false
      }
      let settings = {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      fetch(`${baseURL}/messages`, settings)
       .then(data => {})
    }



  render() {

    return (
      <div className="main-container">
        <Toolbar
          onSelectAll={this.onSelectAll.bind(this)}
          onDeselectAll={this.onDeselectAll.bind(this)}
          messagesData={this.state.messages}
          everySelected={this.state.everySelected}
          someSelected={this.state.someSelected}
          noneSelected={this.state.noneSelected}
          markAsRead={this.markAsRead.bind(this)}
          markAsUnread={this.markAsUnread.bind(this)}
        />
        <Messages
          onClickStar={this.onClickStar.bind(this)}
          onSelect={this.onSelect.bind(this)}
          messagesData={this.state.messages}
          dateTime={this.dateTime.bind(this)}
        />
      </div>
    );
  }
}

export default Home;
