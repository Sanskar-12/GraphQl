import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { types } from "./graphql/schema/schema.js";
import { connectDB } from "./database/database.js";
import { getUser, getUserById } from "./controllers/user.js";
import { getCourseById, getCourses } from "./controllers/courses.js";
import { getLectures } from "./controllers/lectures.js";
dotenv.config({ path: "./.env" });
connectDB();
export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = Number(process.env.PORT) || 3000;
const server = new ApolloServer({
    typeDefs: types,
    resolvers: {
        Query: {
            users: getUser,
            courses: getCourses,
            course: getCourseById,
            lectures: getLectures,
        },
        Course: {
            instructor: async (course) => {
                return await getUserById(course.instructor);
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
    },
});
startStandaloneServer(server, {
    listen: {
        port,
    },
}).then(() => {
    console.log("Server is working on Port:" + port + " in " + envMode + " Mode.");
});
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors({ origin: " * ", credentials: true }));
// app.use(morgan("dev"));
// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });
// // your routes here
// app.get("*", (req, res) => {
//   res.status(404).json({
//     success: false,
//     message: "Page not found",
//   });
// });
// app.use(errorMiddleware);
// app.listen(port, () =>
//   console.log("Server is working on Port:" + port + " in " + envMode + " Mode.")
// );
