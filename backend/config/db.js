import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        console.log(process.env.JWT_SECRET)
        const conn = await mongoose.connect(`${process.env.MONGO_URL}`)
          console.log(
            `Database connected ${conn.connection.host}`.cyan.underline
          )
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
   
   
  
   
}

export default connectDB