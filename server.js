const express = require("express");
const db = require("mongoose");
const app = express();

app.use(express.json());
app.use(express.static("front"));

//connection string - from mongoDB extension
//dbname - whatever you want
const dbURL =
  "mongodb+srv://poniaka:mongozebra1914@cluster0.yh7hrm2.mongodb.net/teachersDb";
db.connect(dbURL).then(() => console.log("DB connected"));

const teacherSchema = new db.Schema({
  fullName: String,
  id: Number,
  salary: Number,
  profesion: String,
});
const teachersModel = db.model("teachers", teacherSchema);
//first time add to a collection --WORKS--
// teacherList = [
//   {
//     fullName: "tal",
//     id: 123456,
//     salary: 10000,
//     profesion: "doctor",
//   },
//   {
//     fullName: "gal",
//     id: 456789,
//     salary: 120000,
//     profesion: "biology",
//   },
//   {
//     fullName: "sara",
//     id: 905158,
//     salary: 8000,
//     profesion: "history",
//   },
// ];
// teacherList.map((teacher) => {
//   teachersModel.create(teacher);
// });

// server routes
//1.GET ALL TEACHERS
app.get("/teachers", async (req, res) => {
  try {
    const allTeachers = await teachersModel.find();
    res.json(allTeachers);
  } catch (error) {
    res.json(error);
  }
});

//2. POST lower than input
app.post("/lowerThanInput", async (req, res) => {
  let teacherList = await teachersModel.find({
    salary: { $gt: req.body.value },
  });

  res.json(teacherList);
});

//3. POST add teacher
app.post("/teacher", async (req, res) => {
  let teacherList = await teachersModel.find();
  let isOriginal = true;
  teacherList.map((teacher) => {
    if (!isOriginal) {
      return;
    } else {
      if (
        teacher.fullName == req.body.body.fullName &&
        teacher.profesion == req.body.body.profesion
      ) {
        isOriginal = false;
      } else {
        isOriginal = true;
      }
    }
  });
  if (isOriginal) {
    await teachersModel.create(req.body.body);
  }
  res.json(isOriginal ? "new user" : "already exist");
});

const port = 3000;
app.listen(port, () => {
  console.log("listening on port localhost:" + port);
});
