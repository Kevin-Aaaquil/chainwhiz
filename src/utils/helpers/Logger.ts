import chalk from "chalk";

class CustomLogger {
  message: string;

  constructor() {
    this.message = "";
  }

  success(message: string) {
    this.message = message;
    console.log(`${chalk.green("SUCCESS")} : ${message}`);
  }

  error(err:Error|string):void;
  error(err:Error|string):void{
    if(typeof err === "string"){
      this.message=err;
      console.log(`${chalk.red("ERROR")} : ${err}`);
    }
    else{
      this.message=err.message;
      console.log(`${chalk.red("ERROR")} : ${err.message} \n${err.stack}`);
    }
  }
  


  warn(message: string) {
    this.message = message;
    console.log(`${chalk.yellow("WARN")} : ${message}`);
  }

  info(message: string) {
    this.message = message;
    console.log(`${chalk.cyan("INFO")} : ${message}`);
  }
}

export const Logger = new CustomLogger();