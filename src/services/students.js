import StudentsModel from "../imports/models/StudentModel";
import { async } from "q";

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

export const removeStudent = async (id) => {
    let sql = `delete  from users where users_id=${id}`;
    let data = new FormData();
    data.append("sql", sql);
    data.append("op", "REMOVE");
    data.append("get_sql", "select * from users");

    let res = await fetch("http://bhoomi.pe.hu/entei/query.php", {
        method: "POST",
        body: data,
    })
        .then(res => res.json())
        .then(res => res.res);
    new StudentsModel(res).save();
};
