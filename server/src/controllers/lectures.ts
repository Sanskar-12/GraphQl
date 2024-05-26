import Lecture from "../models/lectureModel.js";

export const getLectures = async () => {
  const lectures = await Lecture.find();
  return lectures;
};
