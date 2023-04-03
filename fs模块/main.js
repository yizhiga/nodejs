const fs = require('fs');
// fs.writeFile('./text.txt', '马上要来了', err => { console.log(err)})
fs.writeFileSync('./text.txt', `${new Date()}`)
// fs.appendFile('./text.txt', '窗前明月光', err => {console.log(err)})
// fs.appendFileSync('./text.txt', '疑是地上霜', err => {console.log(err)})
const wsfile = fs.createWriteStream('./text.txt');
wsfile.write('窗前明月光\r\n');
wsfile.write('疑是地上霜\r\n');
wsfile.write('举头望明月\r\n');
wsfile.write('低头思故乡\r\n');
wsfile.end();