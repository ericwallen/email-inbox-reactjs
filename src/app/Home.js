import React from 'react'
import Toolbar from './components/Toolbar.js'
import Messages from './components/Messages.js'
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


  render() {
    return (
      <div className="main-container">
        <Toolbar

        />
        <Messages

          onClickStar={this.onClickStar.bind(this)}
          messagesData={this.state.messages}
        />
      </div>
    );
  }
}

export default Home;
