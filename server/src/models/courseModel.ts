import mongoose from "mongoose";

export type CourseType = {
  title: string;
  description: string;
  instructor: string;
  ratingsAverage: number;
  ratingsQuantity: number;
  price: number;
  category: string;
  subCategory: string;
  level: string;
  language: string;
  whatYouWillLearn: string[];
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
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ratingsAverage: {
      type: Number,
      required: true,
    },
    ratingsQuantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    subCategory: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    whatYouWillLearn: [
      {
        type: String,
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model<CourseType>("Course", schema);
export default Course;
