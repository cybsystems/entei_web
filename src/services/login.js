import { store } from "../imports/store";
import User from "../imports/models/UserModel";

export const isLogin = async ({ userName, passWord }) => {
	let sql = `select * from admin where un='${userName}' and  pass='${passWord}'`;
	let data = new FormData();
	data.append("sql", sql);

	let res = await fetch("http://bhoomi.pe.hu/entei/query.php", {
		method: "POST",
		body: data,
	})
		.then(res => res.json())
		.then(res => res.res[0]);
    
    new User(res).save();
};
