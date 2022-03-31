#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer'
import gradient from 'gradient-string'
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';

let playerName;
const sleep = (ms=2000) => new Promise(r => setTimeout(r, ms));

async function welcome(){
  const rainbowTitle = chalkAnimation.rainbow('Welcome to the  RQuiz GAME! \n')
  await sleep()
  rainbowTitle.stop();
  console.log(`${chalk.bgBlue('HOW TO PLAY')}
  I am a process on your computer.
  If you get any question wrong I will be ${chalk.bgRed('killed')}
  So get all the questions right...
  `)
}

await welcome();