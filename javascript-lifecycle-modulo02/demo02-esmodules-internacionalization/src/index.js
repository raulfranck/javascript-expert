import DraftLog from 'draftlog';
import chalk from 'chalk';
import chalkTable from 'chalk-table';
import readline from 'readline';

import database from './../database.json';
import Person from './person.js';

DraftLog(console).addLineListener(process.stdin)

const DEFAULT_LANGGUAGE = "pt-BR"

const options = {
  leftPad: 2,
  columns: [
    { field: "id", name: chalk.cyan("ID") },
    { field: "vehicles", name: chalk.magenta("Vheicles") },
    { field: "kmTraveled", name: chalk.cyan("Km traveld") },
    { field: "from", name: chalk.yellowBright("From") },
    { field: "to", name: chalk.redBright("To") },
  ]
}

const table = chalkTable(options, database.map(item => new Person(item).formatted(DEFAULT_LANGGUAGE)))
const print = console.draft(table)


const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

terminal.question('Qual é o seu nome?', msg => {
  console.log('msg', msg.toString())
})