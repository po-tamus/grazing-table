import {Schema, model, models} from "mongoose";

const ContactSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is requried"]
        
    }, 
    message: {
        type: String, 
        required: [true, "Message is required"]
    },
    phone_number: String 
})

const Contact = mongoose.model("Contact", ContactSchema);
module.exports = Contact;