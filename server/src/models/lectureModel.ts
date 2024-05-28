import mongoose from "mongoose";

export type LectureType = {
  title: string;
  description: string;
  position: number;
  resources: string[];
  videoUrl: {
    "480p": string;
    "720p": string;
    "1080p": string;
  };
};

const schema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

const Lecture = mongoose.model<LectureType>("Lecture", schema);
export default Lecture;
