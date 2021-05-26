import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'
import _ from 'lodash'

class App extends Component{
  state = {
    characters: [
      {
        name: 'Brett',
        job: 'Scrum Master',
      },
      {
        name: 'Ekta',
        job: 'Product owner',
      },
      {
        name: 'Satya',
        job: 'Architect',
      },
      {
        name: 'Faisal',
        job: 'Engineer',
      }, 
    ],
  }
    render(){
        const {characters} = this.state;

        return (
            <div className="Container">
                <h1>Hello, React Forms !</h1>
                <Table characterData={characters} removeCharacter={this.removeCharacter}/>
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        )
    }

    removeCharacter = (index) => {
      const {characters} = this.state
      console.log('Deleting ', characters[index]);
      // tset the app state to all characters which do not match the given index
      this.setState(
        {
          characters : characters.filter((character, i) => {
                      return i !== index
          })
        }
      )
    }

    handleSubmit = (newCharacter) => {
      if(!_.isEmpty(newCharacter.name) ){
        // set the app state to add the new character to existing characters
        this.setState({characters: [...this.state.characters, newCharacter]})      
      }
    }
}

export default App