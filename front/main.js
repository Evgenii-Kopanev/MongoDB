// import axios from "axios";
const allTeachers = async () => {
  const allTeachers = await axios.get("/teachers");
  console.log("🚀 ~ allTeachers ~ allTeachers:", allTeachers);

  allTeachers.data.forEach((teacher) => {
    let fullName = (document.createElement(
      "p"
    ).innerHTML = `name: ${teacher.fullName}, `);
    let id = (document.createElement("p").innerHTML = `id: ${teacher.id}, `);
    let salary = (document.createElement(
      "p"
    ).innerHTML = `salary: ${teacher.salary}, `);
    let profesion = (document.createElement(
      "p"
    ).innerHTML = `prof: ${teacher.profesion}, `);
    let hr2 = document.createElement("hr");
    let hr1 = document.createElement("hr");
    document.body.append(hr1, fullName, id, salary, profesion, hr2);
  });
};

// const allTeachers = async () => {
//   const data = await fetch("/teachers");
//   const allTeachers = await data.json();
//   allTeachers.forEach((teacher) => {
//     let fullName = (document.createElement(
//       "p"
//     ).innerHTML = `name: ${teacher.fullName}, `);
//     let id = (document.createElement("p").innerHTML = `id: ${teacher.id}, `);
//     let salary = (document.createElement(
//       "p"
//     ).innerHTML = `salary: ${teacher.salary}, `);
//     let profesion = (document.createElement(
//       "p"
//     ).innerHTML = `prof: ${teacher.profesion}, `);
//     let hr2 = document.createElement("hr");
//     let hr1 = document.createElement("hr");
//     document.body.append(hr1, fullName, id, salary, profesion, hr2);
//   });
// };
//Second POST
const getLowerThan = async () => {
  let value = document.getElementById("myId").value;
  //-------------
  const data = await fetch("/lowerThanInput", {
    method: "post",
    body: JSON.stringify({ value }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const allTeachers = await data.json();
  allTeachers.forEach((teacher) => {
    let fullName = (document.createElement(
      "p"
    ).innerHTML = `name: ${teacher.fullName}, `);
    let id = (document.createElement("p").innerHTML = `id: ${teacher.id}, `);
    let salary = (document.createElement(
      "p"
    ).innerHTML = `salary: ${teacher.salary}, `);
    let profesion = (document.createElement(
      "p"
    ).innerHTML = `prof: ${teacher.profesion}, `);
    let hr2 = document.createElement("hr");
    let hr1 = document.createElement("hr");
    document.body.append(hr1, fullName, id, salary, profesion, hr2);
  });
};

//----------------------

//THIRD POST
const addTeacher = async () => {
  let fullName = document.getElementById("fullName").value;
  let teacherId = document.getElementById("id").value;
  let salary = document.getElementById("salary").value;
  let prof = document.getElementById("prof").value;

  const body = {
    fullName: fullName,
    id: teacherId,
    salary: salary,
    profesion: prof,
  };

  const data = await fetch("/teacher", {
    method: "post",
    body: JSON.stringify({ body }),
    headers: { "Content-Type": "application/json" },
  });

  const result = await data.json();
  console.log("🚀 ~ addTeacher ~ result:", result);
  //   alert(result);
};
