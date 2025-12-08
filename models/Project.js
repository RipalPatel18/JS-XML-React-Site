const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  liveUrl: String,
  repoUrl: String,
  tags: [String]
}, { timestamps: true });

module.exports = mongoose.model("Project", ProjectSchema);
