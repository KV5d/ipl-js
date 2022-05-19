//ipl

//imports
const yargs = require("yargs");
const axios = require('axios');

const options = yargs
  .usage("Usage: -ip <IP address>")
  .option("s", { alias: "scan", describe: "IP ADDRESS TO SCAN", type: "string",
    demandOption: true })
  .argv;

const target = `\nTarget: ${options.scan}\n`;
console.log(target);

const api = `http://ip-api.com/json/${options.scan}?fields=9585657`

axios.get(api)
  .then(data=>console.log("Country | " + data.data.country +
    "\nProvince/State | " + data.data.regionName +
    "\nCity | " + data.data.city +
    "\nZip/Postal | " + data.data.zip +
    "\nLatitude/Longitude | (" + data.data.lat + ") (" + data.data.lon +
    ")\nISP | " + data.data.isp +
    "\nTimezone | " + data.data.timezone +
    "\nCurrency | " + data.data.currency +
    "\nProxy | " + data.data.proxy +
    "\n"))
  .catch(err=>console.log(err))
