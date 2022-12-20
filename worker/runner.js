const cp = require('child_process')
const util = require('util')
const syncExec = util.promisify(cp.exec)

const runCode=(compiler,sourceFile,input)=>{
    return syncExec(`sh ./worker/main.sh ${compiler} ${sourceFile} ./worker/input`)
}

module.exports=runCode