async function isPresent(table, key, value, type = "string") {
    let sql =
      type == "string"
        ? "select * from " + table + " where  " + key + "='" + value + "'"
        : "select * from " + table + " where  " + key + "=" + value + "";
    let res = await $.post("http://bhoomi.pe.hu/entei/query.php", { sql: sql });
    let result = JSON.parse(res).res;

    return result.length > 0;
  }
