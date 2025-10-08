import mongoose from "mongoose";

export default async function connectToMongo() {
  if (mongoose.connection?.readyState === 1) {
    console.log("✅ MongoDB already connected");
    return;
  }

  if (mongoose.connection?.readyState === 2) {
    console.log("⏳ MongoDB connection in progress...");
    return;
  }

  const uri =
    "mongodb+srv://zaza:1234test@cluster0.crzqo.mongodb.net/mongoData?retryWrites=true&w=majority&appName=Cluster0";
  try {
    await mongoose.connect(uri).then(() => console.log("connected to mongoDB"));
  } catch (error) {
    console.log(error);
  }
}
