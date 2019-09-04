import mongoose from "mongoose"
const Schema = mongoose.Schema

const _model = new Schema({
    type: { type: String, required: true },
    model: { type: String, required: true },
    description: { type: String, required: true },
    imgUrl: { type: String, default: 'https:/placeholder.it200x200' },
    price: { type: Number, }
}, { timestamps: true })


export default class CarService {
    get repository() {
        return mongoose.model('Car', _model)
    }
}