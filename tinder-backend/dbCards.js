import mongoose from "mongoose"

const cardScheme = mongoose.Schema({
	name:String,
	imgUrl:String
})

export default mongoose.model('cards',cardScheme);