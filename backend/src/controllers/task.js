import { connect } from "../database"



export const getDates = async  (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM citas");
    res.json(rows);
    console.log(rows);
}

export const getDateByID = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM citas WHERE id_cita = ?", [req.params.id]);
    res.json(rows);
}

export const getDatesByName = async (req, res) =>{
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM citas WHERE nombre = ?", [req.params.nombre]);
    res.json(rows);
}

export const getDatesCount = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT COUNT(*) FROM citas");
    res.json(rows[0]['COUNT(*)']);
}

export const saveDate = async (req, res) => {
    const connection = await connect();
    const [results] = await connection.query("INSERT INTO citas (nombre, descripcion, fecha) VALUES (?,?,?)",[
        req.body.nombre,
        req.body.descripcion,
        req.body.fecha,
    ]);
    
    res.json({
        id: results.insertIdent,
        ...req.body,
    })
    
}

export const deleteDate = async (req, res) => {
    const connection = await connect();
    const result = await connection.query("DELETE FROM citas WHERE id_cita = ?", [req.params.id]);
    console.log(result)

}

export const updateDate = async (req, res) => {
    const connection = await connect();
    const [results] = await connection.query("UPDATE citas SET ? WHERE id_cita = ?", [
        req.body,
        req.params.id,
    ])
    res.sendStatus(204);
}

/** Admin */

export const getAdminByEmail = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM admin WHERE email = ?", [req.params.email]);
    console.log(req.body);
    res.json(rows);
}

export const getDateByDate = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM citas WHERE fecha = ?", [req.params.fecha]);
    res.json(rows);
}


export const saveNewUser = async (req, res) => {
    const connection = await connect();
    const [results] = await connection.query("INSERT INTO admin (email, password, rol) VALUES (?,?,?)", [
        req.body.email,
        req.body.password,
        req.body.rol,
    ]);

    res.json({
        id: results.insertIdent,
        ...req.body,
    })
}
