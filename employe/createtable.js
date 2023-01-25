const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
const uri = "mongodb+srv://admin:(password)@cluster0.n1tz0mb.mongodb.net/veritabanim?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  
  const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' }
  });
  const schoolSchema = new mongoose.Schema({
    name: String,
    location: String
  });
  const classSchema = new mongoose.Schema({
    teacher: String,
    number: Number,
    school: { type: mongoose.Schema.Types.ObjectId, ref: 'School' }
  });

  const Student = mongoose.model('Student', studentSchema);
  const School = mongoose.model('School', schoolSchema);
  const Class = mongoose.model('Class', classSchema);


  const school = new School({ name: 'Kocaeli Üniversitesi'  , location: 'Kocaeli' });
  const classes = new Class({ teacher: 'Meliha Soylu', number: '101', school });
  const student = new Student({ name: 'Cemal Katmer', age: '21', class: classes });

  school.save();
  classes.save();
  student.save();
  db.close();
});

