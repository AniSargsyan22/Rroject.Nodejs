'use strict';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const contactSchema = new Schema(
    {
        title:{ 
            type: String,
            required: true,
        },
        isPublic: {
            type: Boolean,
            default: false,
        },
        imageUrl: {
            type: String,
        },
        created: {
            type: Date,
            default: Date.now,
        }
}
);

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;

