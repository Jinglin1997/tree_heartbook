// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({ env: "kelpcloudenvironment-3bb91f1ee75"})
// cloud.init({env:"kelptree-5g1kfwin66f6d1b0"})
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const ele = event.ele;
  return await db.collection('author')
  .where({
    element: ele
  })
  .get({})
}