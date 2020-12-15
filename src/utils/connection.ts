import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://fabio.evangelion.guitar@gmail.com:guitarra@cluster0.30pd5.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});