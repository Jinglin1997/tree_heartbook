// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({ env: "kelpcloudenvironment-3bb91f1ee75"})
// cloud.init({env: "kelptree-5g1kfwin66f6d1b0"})
const db = cloud.database()
const _ = db.command
const $ = _.aggregate

// 云函数入口函数
exports.main = async (event, context) => {
  const ele=event.ele;
  return await db.collection('books').aggregate()
  .lookup({
    from:"author", 
    localField: 'authorid', 
    foreignField: 'number', 
    as: 'newlist' 
  })
  .match({
    element:ele
  })
  // .sample({
  //   size: 1
  // })
  .replaceRoot({
    newRoot: $.mergeObjects([$.arrayElemAt(['$newlist', 0]), '$$ROOT'])
  })
  .project({
    _id:0,
    authorname:1,
    nationality:1,
    name: 1,
    introduce1:1,
    introduce2:1,
    introduce3:1,
    picture:1,
  })
  .end()
}