const os=require('os')

//info  about current user
const user=os.userInfo()
console.log(user)

// method returns the system uptime in seconds

console.log(`The systime uptime is ${os.uptime} sec's`)

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
    occmem: os.occmem(),
}
console.log(currentOS)