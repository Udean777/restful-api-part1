import pool from "../../config/db.js";

// buat user
export const create = (data, callBack) => {
  pool.query(
    `insert into register(firstName, lastName, email, password)
    values(?,?,?,?)
    `,
    [data.firstName, data.lastName, data.email, data.password],
    (err, results, fields) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    }
  );
};

// mengambil semua users
export const get = (callBack) => {
  pool.query(
    `select id,firstName,lastName,email,password from register`,
    [],
    (err, results, fields) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    }
  );
};

// ngambil user berdasarkan id
export const getById = (id, callBack) => {
  pool.query(
    `select id,firstName,lastName,email,password from register where id = ?`,
    [id],
    (err, results, fields) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results[0]);
    }
  );
};
