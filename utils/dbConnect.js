
import mongoose from 'mongoose';

let isConnected = false; // track the connection

const MONGODB_URI = "mongodb+srv://Abeer2510:<pass>@testing1.wbdimtk.mongodb.net/?retryWrites=true&w=majority&appName=Testing1";

export const dbConnect = async () => {
  mongoose.set('strictQuery', true);

  if(isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      //dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true;

    console.log('MongoDB connected')
  } catch (error) {
    console.log(error);
  }
}
