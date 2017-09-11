import React from 'react'
import Toolbar from './Toolbar.js'
import Messages from './Messages.js'
const baseURL = "https://react-inbox-api.herokuapp.com/api"

class Home extends React.Component {
    constructor() {
       super()
       this.state = {
         messages: []
     }
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
          msg.selected = true
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


    }

  render() {
    return (
      <div className="main-container">
        <Toolbar

        />
        <Messages
          onClickStar={this.onClickStar.bind(this)}
          onSelect={this.onSelect.bind(this)}
          messagesData={this.state.messages}
        />
      </div>
    );
  }
}

export default Home;
