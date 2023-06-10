import mongoose from "mongoose";

const createSchema = mongoose.Schema({
    body: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const CreateText = mongoose.model('CreateText', createSchema);

export default CreateText;