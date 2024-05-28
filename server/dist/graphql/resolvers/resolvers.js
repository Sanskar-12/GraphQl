import { getCourseOfUser, getUser, getUserById, } from "../../controllers/user.js";
import { getCourseById, getCourses } from "../../controllers/courses.js";
import { getLectures } from "../../controllers/lectures.js";
const user = [];
export const graphqlResolvers = {
    Mutation: {
        newUser: (_, { name, age, gender }) => {
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
        instructor: async (course) => {
            return await getUserById(course.instructor);
        },
    },
    User: {
        course: async (user) => {
            return await getCourseOfUser(user);
        },
    },
    Lecture: {
        videoUrl: (lectures) => {
            return {
                _480p: lectures.videoUrl["480p"],
                _720p: lectures.videoUrl["720p"],
                _1080p: lectures.videoUrl["1080p"],
            };
        },
    },
};
