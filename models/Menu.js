import {Schema, model, models} from "mongoose";
import mongoose from "mongoose";
import { string } from "zod";

const ItemSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
  });
  
  const MenuSchema = new Schema({
    menu: { type: String, required: true },
    items: [ItemSchema]
});

// checks if there is a Menu model, creates one called "Menu" if not
module.exports = mongoose.models.Menu || mongoose.model("Menu", MenuSchema);