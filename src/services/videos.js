import VideoModel from "../imports/models/VideoModel";
 
export const getVideos = async () => {
    let sql = `select * from videos`;
    let data = new FormData();
    data.append("sql", sql);
    let res = await fetch("http://bhoomi.pe.hu/entei/query.php", {
        method: "POST",
        body: data,
    })
        .then(res => res.json())
        .then(res => res.res);
    new VideoModel(res).save();
};

export const removeVideo = async (id) => {
    let sql = `delete  from videos where videos_id=${id}`;
    let data = new FormData();
    data.append("sql", sql);
    data.append("op", "REMOVE");
    data.append("get_sql", "select * from videos");

    let res = await fetch("http://bhoomi.pe.hu/entei/query.php", {
        method: "POST",
        body: data,
    })
        .then(res => res.json())
        .then(res => res.res);
    new VideoModel(res).save();
};
