import mongoose from 'mongoose';



const Connection = async (username, password) => {
    const URL = `mongodb+srv://fahad:Admin@321@fa18-bse-012.7uutc.mongodb.net/fa18-bse-012?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;