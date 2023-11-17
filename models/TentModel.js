import mongoose from 'mongoose'

export const TentSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: false
    },
    size: {
        type: Number,
        required: false
    },
    category: {
        type: String,
        required: false
    },
    images: [
        {
            type: String,
            required: false
        }
    ],
    parts: [],
    tags: String
}, { timestamps: true })

const Tent = mongoose.model('tents', TentSchema)

export default Tent