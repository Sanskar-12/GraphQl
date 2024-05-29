import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import { connectDB } from "./database/database.js";
import { connectGraphQl } from "./graphql/graphql.js";
import { expressMiddleware } from "@apollo/server/express4";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";
import morgan from "morgan";

dotenv.config({ path: "./.env" });

connectDB();

export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = Number(process.env.PORT) || 3000;

const server = connectGraphQl();

await server.start();

const app = express();

app.use(express.json());

app.use("/graphql", expressMiddleware(server));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: " * ", credentials: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// // your routes here

app.get("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Page not found",
  });
});

app.use(errorMiddleware);

app.listen(port, () =>
  console.log("Server is working on Port:" + port + " in " + envMode + " Mode.")
);
