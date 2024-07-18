import mongoose from "mongoose";

//connect to Mongo

("mongodb+srv:<Ghazal>:<GhazalB37>@cluster7.peg5id9.mongodb.net/JULY_PROJECT2024=Cluster7");

exports.connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connection Established...");
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = mongoose;
