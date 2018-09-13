const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline')
var dataHolder = [];
const PythonShell = require("python-shell");
const port = new SerialPort('/dev/rfcomm0', {
  baudRate: 9600
});
const parser = port.pipe(new Readline({ delimiter: '\r\n' }))
parser.on('data', console.log)
port.write('main screen turn on', function(err) {
  if (err) {
    return console.log('Error on write: ', err.message);
  }
  console.log('message written');
});
 
// Open errors will be emitted as an error event
port.on('error', function(err) {
  console.log('Error: ', err.message);
})

port.on('data', function (data) {
	let dataHolder = [];
  console.log('Data:', data);
  
	dataHolder.push(data);
 
	if(String(dataHolder[0] === "ood")){
		console.log("Unlocking");
		PythonShell.run('unlocked.py',function (err, results){
            if (err) throw err;
          console.log('Unlocking process finished');
          });
		}
   
});
