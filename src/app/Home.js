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
       let id = messages.id
       console.log(id);
        this.setState(prevState => ({
          msgStarred: !prevState.starred
        }));
      }



      onGreet () {
         alert("hello")
      }

  render() {
    console.log(this.state.messages);
    return (
      <div className="main-container">
        {this.state.name}
        <Toolbar/>
        <Messages
          onGreet={this.onGreet.bind(this)}
          onClickStar={this.onClickStar.bind(this)}
          msgStarred
          messagesData={this.state.messages}
        />
      </div>
    );
  }
}

export default Home;
