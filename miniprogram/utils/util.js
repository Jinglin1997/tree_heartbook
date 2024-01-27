const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}
//筛选数组中匹配的键值的数据
var checkData = {
  macthDataByKey:function(arr, reg) {
    const  datArr=[];
    for(var key in arr){
      if(reg.test(key)){
        datArr.push(arr[key]);
      }
    }
    return datArr;
  }
}

module.exports = {
  formatTime,checkData:checkData
}
