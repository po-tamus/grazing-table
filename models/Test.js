// file for testing database query
import {model, models, Schema} from "mongoose";
import mongoose from "mongoose";

const TestSchema = new Schema({
    test: String
})

module.exports = mongoose.models.test || mongoose.model("test", TestSchema);