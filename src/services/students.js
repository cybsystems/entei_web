import StudentsModel from "../imports/models/StudentModel";

export const getStudents = async () => {
    let sql = `select * from users`;
    let data = new FormData();
    data.append("sql", sql);
    let res = await fetch("http://bhoomi.pe.hu/entei/query.php", {
        method: "POST",
        body: data,
    })
        .then(res => res.json())
        .then(res => res.res);

    new StudentsModel(res).save();
};
