import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect("mongodb+srv://shahbaz898khan:npKFaYZoYLnMAzLx@cluster0.n5ovxnf.mongodb.net/?retryWrites=true&w=majority", {
      dbName: "Chat_App2",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;

    console.log("MongoDB is connected successfully");
  } catch (error) {
    console.log(error);
  }
};
