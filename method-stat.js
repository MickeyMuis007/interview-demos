
const timeDiff = (startTime) => {
  return (getTime() - startTime);
}

const getTime = () => {
  var hrTime = process.hrtime()
  return (hrTime[0] * 1000000 + hrTime[1] / 1000)
}


const getStats =  (val, method) => {
  const stat = {
    name: method.name,
    val: val,
    time: "",
    result: ""
  }
  
  const startTime = getTime();
  stat.result = method(val);
  stat.time = timeDiff(startTime);
  
  displayStat(stat);
  return stat;
}

const displayStat = (stat) => {
  console.log(`${stat.name}\t${stat.time}\t${stat.val}\t${stat.result}`);
}


module.exports = getStats;