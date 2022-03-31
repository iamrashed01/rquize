#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import axios from "axios";

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function createUser() {
  let rainbowTitle = null;
  figlet("User Controller !", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    rainbowTitle = chalkAnimation.rainbow(`${data} \n`);
    return data;
  });
  await sleep();
  if (rainbowTitle) {
    rainbowTitle.stop();
  }

  inquirer
    .prompt([
      {
        type: "list",
        name: "usercontroller",
        message: "What do you want to do?",
        choices: ["Create User", "Update User", "Remove User"],
      },
    ])
    .then((answers) => {
      if (answers?.usercontroller === "Create User") {
        inquirer
          .prompt([
            {
              type: "type",
              name: "username",
              message: "User name:",
            },
            {
              type: "type",
              name: "phone",
              message: "User phone:",
            },
          ])
          .then((answers) => {
            console.log(
              `\b Name: ${chalk.red(answers?.username)} \n Phone: ${chalk.red(
                answers?.phone
              )} \n User created succesfully \n`
            );
          });
      } else {
        console.log(
          `${chalk.bgBlue(answers?.usercontroller)} feature is coming soon!`
        );
      }
    });
}

// await createUser();

async function getSkill() {
  let rainbowTitle = null;
  figlet("His Skills", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    rainbowTitle = chalkAnimation.rainbow(`${data} \n`);
    return data;
  });

  // await sleep();
  // if (rainbowTitle) {
  //   rainbowTitle.stop();
  // }

  axios.get("https://whoamirashed.herokuapp.com/api/skills").then((res) => {
    if (res?.data?.data) {
      return res?.data?.data?.forEach((skill) => {
        console.log(
          `\b Subject: ${chalk.bgCyan(
            skill?.name
          )} \n Creator: ${chalk.bgMagenta(
            skill?.creator
          )} \n ====================`
        );
      });
    }
    return console.log("could\nt fetch skills");
  });
}

// await getSkill()

async function initApp() {
  let rainbowTitle = null;
  figlet("Welcome  to  RQUIZ  Program", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    rainbowTitle = chalkAnimation.rainbow(`${data} \n`);
    return data;
  });

  await sleep();
  if (rainbowTitle) {
    rainbowTitle.stop();
  }

  inquirer
    .prompt([
      {
        type: "list",
        name: "init",
        message: "What do you want to do?",
        choices: [
          "Login to App",
          new inquirer.Separator(),
          "Know About Publisher",
        ],
      },
    ])
    .then(async (answers) => {
      if (answers?.init === "Login to App") {
        await createUser();
      } else {
        await getSkill();
      }
    });
}

await initApp();
