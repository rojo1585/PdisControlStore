import { connect } from "../database"


//nice
export const getProducts = async  (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM productos");
    res.json(rows);
    console.log(rows);
}
//nice
export const getProductByID = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM productos WHERE id_producto = ?", [req.params.id]);
    res.json(rows);
}

export const getProductByName = async (req, res) =>{
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM product WHERE nombre = ?", [req.params.nombre]);
    res.json(rows);
}

export const getProductCount = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT COUNT(*) FROM productos");
    res.json(rows[0]['COUNT(*)']);
}

export const saveProducts = async (req, res) => {
    const connection = await connect();
    const [results] = await connection.query("INSERT INTO productos (id_tienda, nombre, descripcion, cantidad, precio_costo, precio_venta) VALUES (?,?,?,?,?,?)",[
        req.body.id_tienda,
        req.body.nombre,
        req.body.descripcion,
        req.body.cantidad,
        req.body.precio_costo,
        req.body.precio_venta
    ]);
    
    res.json({
        id: results.insertIdent,
        ...req.body,
    })
    
}

export const deleteProduct = async (req, res) => {
    const connection = await connect();
    const result = await connection.query("DELETE FROM productos WHERE id_producto = ?", [req.params.id]);
    console.log(result)

}

export const updateProduct = async (req, res) => {
    const connection = await connect();
    const [results] = await connection.query("UPDATE productos SET ? WHERE id_producto = ?", [
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
