import {resolve} from "path";
import {readFileSync} from "fs";

import {argv} from "yargs";

export function readConfig(){
  if(!argv.config) throw new Error("Missing Config Parameter");

  var config = JSON.parse(readFileSync(resolve(argv.config)));

  console.log(config);
}
