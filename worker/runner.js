const cp = require('child_process')
const util = require('util')
const syncExec = util.promisify(cp.exec)

const runCode=(compiler,sourceFile,input)=>{
    return syncExec(`sh main.sh ${compiler} ${sourceFile} input`)
}

module.exports=runCode