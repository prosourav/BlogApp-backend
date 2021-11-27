import mongoose from "mongoose";

const Connection = async (username, password) => {
  try {
    const uri = `mongodb+srv://${username}:${password}@cluster0.vgudw.mongodb.net/Blog?retryWrites=true&w=majority`;
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Database Connection Successfull`);
  } catch (error) {
    console.log(`Error while connecting ${error}`);
  }
};
export default Connection;
