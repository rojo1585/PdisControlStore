import { Router } from "express";
import { deleteProduct, getProductByID, getProductCount, getProducts, saveProducts, updateProduct, getProductByName, getAdminByEmail, saveNewUser, getDateByDate } from "../controllers/task";


const router = Router()

/**
 * @swagger
 * component:
 *  tags:
 *   name: Dates
 *   description: Dates endpoint
 */

/**
 * @swagger
 * /dates:
 *  get:
 *    summary: Get date info by name
 *    tags: [Dates]
 */


router.get('/productos/byname/:nombre', getProductByName)
/**
 * @swagger
 * /dates:
 *  get:
 *    summary: Get all dates info
 *    tags: [Dates]
 */
router.get('/productos', getProducts)
/**
 * @swagger
 * /dates:
 *  get:
 *    summary: Get dates info by date
 *    tags: [Dates]
 */
//router.get('/datesbyfecha/:fecha', getDateByDate)

/**
 * @swagger
 * /dates/user:
 *  get:
 *      summary: Get user information by email address
 */

router.get('/dates/user/:email', getAdminByEmail)

/**
 * @swagger
 * /dates/count:
 *  get:
 *    summary: Get counter all dates
 *    tags: [Dates]
 */

router.get('/productos/count', getProductCount)

/**
 * @swagger
 * /dates:
 *  get:
 *    summary: Get date info by id
 *    tags: [Dates]
 */

router.get('/productos/:id', getProductByID)

/**
 * @swagger
 * /dates:
 *  post:
 *    summary: Save new date
 *    tags: [Dates]
 */
router.post('/productos', saveProducts)



router.post('/dates/user', saveNewUser)

/**
 * @swagger
 * /dates/delete:
 *  delete:
 *    summary: Delete date
 *    tags: [Dates]
 */



/**
 * @swagger
 * /dates:
 *  delete:
 *    summary: Delete date by id
 *    tags: [Dates]
 */

router.delete('/productos/:id', deleteProduct)

/**
 * @swagger
 * /dates:
 *  put:
 *    summary: Update date info by id
 *    tags: [Dates]
 */

router.put('/productos/:id', updateProduct)




export default router