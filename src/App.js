import React, {Component} from 'react'
import Table from './Table'

class App extends Component{
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      }, 
    ],
  }
    render(){
        const {characters} = this.state;


        return (
            <div className="Container">
                <h1>Hello, React Forms !</h1>
                <Table characterData={characters} removeCharacter={this.removeCharacter}/>
            </div>
        )
    }

    removeCharacter = (index) => {
      const {characters} = this.state
      console.log('Deleting ', characters[index]);
      this.setState(
        {
          characters : characters.filter((character, i) => {
                      return i !== index
          })
        }
      )
    }
}

export default App