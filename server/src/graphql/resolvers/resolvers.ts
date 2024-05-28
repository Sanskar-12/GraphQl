import {
  getCourseOfUser,
  getUser,
  getUserById,
} from "../../controllers/user.js";
import { getCourseById, getCourses } from "../../controllers/courses.js";
import { getLectures } from "../../controllers/lectures.js";
import { CourseType } from "../../models/courseModel.js";
import { LectureType } from "../../models/lectureModel.js";
import { UserType } from "../../models/userModel.js";

type SampleUserType = {
  name: string;
  age: number;
  gender: string;
};

const user: SampleUserType[] = [];

export const graphqlResolvers = {
  Mutation: {
    newUser: (_: any, { name, age, gender }: SampleUserType) => {
      user.push({
        name,
        age,
        gender,
      });

      return "New User Added";
    },
  },
  Query: {
    users: getUser,
    courses: getCourses,
    course: getCourseById,
    lectures: getLectures,
    sampleUser: () => {
      return user;
    },
  },
  Course: {
    instructor: async (course: CourseType) => {
      return await getUserById(course.instructor);
    },
  },
  User: {
    course: async (user: UserType) => {
      return await getCourseOfUser(user);
    },
  },
  Lecture: {
    videoUrl: (lectures: LectureType) => {
      return {
        _480p: lectures.videoUrl["480p"],
        _720p: lectures.videoUrl["720p"],
        _1080p: lectures.videoUrl["1080p"],
      };
    },
  },
};
