
import database from './../database.json';
import TerminalController from './terminalController.js';
import Person from './person.js';
import { save } from './repository.js'

const DEFAULT_LANGGUAGE = "pt-BR"
const STOP_TERM = ":q"


const terminalController = new TerminalController()
terminalController.initializeTerminal(database, DEFAULT_LANGGUAGE)

async function mainLoop() {
  try {
    const answer = await terminalController.question()
    if(answer ===  STOP_TERM) {
      terminalController.closeTerminal()
      console.log('proccess finished')
      return;
    }
    const person = Person.generateInterfaceFromString(answer)
    terminalController.updateTable(person.formatted(DEFAULT_LANGGUAGE))
    await save(person)
    return mainLoop()
  } catch (error) {
    console.error('Erro: ', error)
    return mainLoop()
  }
}

await mainLoop()
