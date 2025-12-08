const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
  name: String,
  level: String,
  keywords: [String]
});

module.exports = mongoose.model("Skill", SkillSchema);
