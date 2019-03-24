module.exports = function(app) {
  var gst = require('../controllers/gstController');


  // gst Routes
  app.route('/tasks')
    .get(gst.list_all_tasks)
    .post(gst.create_a_task);


  app.route('/tasks/:taskId')
    .get(gst.read_a_task)
    .put(gst.update_a_task)
    .delete(gst.delete_a_task);
};