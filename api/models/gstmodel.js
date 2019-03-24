var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  ipAddress : "Number",
  product: "String",
  GST:"String"
});

module.exports = mongoose.model('Task', TaskSchema);
