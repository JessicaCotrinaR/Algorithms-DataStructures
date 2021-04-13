function validateIP(ip) {
  /**
	@param ip: string
	@return: boolean
	*/
  let splitIp = ip.split("."); // [135,260,10,10]
  if (splitIp.length >= 5 || splitIp.length < 4) return false;
  for (let i = 0; i < 4; i++) {
    if (
      Number(splitIp[i]) > 255 ||
      Number(splitIp[i]) < 0 ||
      splitIp[i] === "" ||
      validNumber(splitIp[i]) === false
    ) {
      return false;
    }
  }
  return true;
}

function validNumber(char) {
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (let i = 0; i < char.length; i++) {
    if (!numbers.includes(char[i])) return false;
  }
  return true;
}
/*    255
ip = '135.260.10.10' false 
[]

ip = '35,60,10,0x1' true 

*/
