import mongoose from "mongoose";
import grid from "gridfs-stream";

const url = "http://localhost:8000";

let gfs;
const conn = mongoose.connection;
conn.once("open", () => {
  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection("fs");
});

export const uploadImage = async (request, response) => {
  try {
    if (!request.file) {
      return response.status(404).json("file not found");
    }
    const imageUrl = `${url}/file/${request.file.filename}`;
    response.status(200).json(imageUrl);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getImage = async (request, response) => {
  console.log("hitting");
  try {
    const file = await gfs.files.findOne({ filename: request.params.filename });
    const readStream = gfs.createReadStream(file.filename);
    readStream.pipe(response);
  } catch (error) {
    response.status(500).json("Failed to fetch the image", error);
  }
};
