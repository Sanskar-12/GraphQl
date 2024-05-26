import Course from "../models/courseModel.js";
export const getCourses = async () => {
    const courses = await Course.find();
    return courses;
};
export const getCourseById = async (parent, arg) => {
    const course = await Course.findById(arg.id);
    return course;
};
