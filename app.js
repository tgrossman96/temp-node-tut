// npm comes with node
// nmp --version
//local dependency - using package only in particular projects
//  npm i <packagename>

//global dependency - using package in any project
//npm install -g <package>

//package.json - manifest file (stores important information about project/package )
//manual way
//npm init
//npm init -y (everything set to default

const _ = require('lodash')

const item = [1, [2, [3, [4]]]]
const newItem = _.flattenDeep(item)
console.log(newItem)