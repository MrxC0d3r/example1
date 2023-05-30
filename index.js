const express =require('experss');

const app = express();

const password = "dgdfgdgtghgehh"

function evalUserInput(input) {
    return eval(input);
  }

app.listen(8080, ()=> {
    console.log("App is running on port 8080")
})