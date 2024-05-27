import Course from "../models/courseModel.js";
import User from "../models/userModel.js";

export const getUser = async () => {
  const users = await User.find();
  return users;
};

export const getUserById = async (id: string) => {
  const user = await User.findById(id);
  return user;
};

export const getCourseOfUser = async (user: any) => {
  const course = await Course.find({
    instructor: user._id,
  });
  return course;
};
