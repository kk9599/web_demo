const Mock = require('mockjs')


module.exports = {
   getComment: Mock.mock({
    "error": 0,
    "message": "success",
    "result|1": [{
      "author": "@name",
      "comment": "@cparagraph",
      "date": "@datetime",
      "nanme":"@name"
    }]
  }),
  addComment: Mock.mock({
    "error": 0,
    "message": "success",
    "result": []
  })
}