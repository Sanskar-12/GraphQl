import mongoose from "mongoose";
const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    position: {
        type: Number,
        required: true,
    },
    resources: [
        {
            title: String,
            url: String,
            _id: String,
        },
    ],
    videoUrl: {
        "480p": String,
        "720p": String,
        "1080p": String,
    },
}, {
    timestamps: true,
});
const Lecture = mongoose.model("Lecture", schema);
export default Lecture;
