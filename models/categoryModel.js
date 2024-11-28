import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    title : {
        type : String,
        required : [true, "title is required"]
    },
    imageUrl : {
        type : String,
        default : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0hqEoqH_Nwgv0ZA7QfnOnAOi2Zq7aqcJhg&s"
    }
})

const categoryModel = mongoose.model("Category", categorySchema);
export default  categoryModel;