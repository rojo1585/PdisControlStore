import { Router } from "express";
import { deleteDate, getDateByID, getDatesCount, getDates, saveDate, updateDate, getDatesByName, getAdminByEmail, saveNewUser, getDateByDate } from "../controllers/task";


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


router.get('/dates/byname/:nombre', getDatesByName)
/**
 * @swagger
 * /dates:
 *  get:
 *    summary: Get all dates info
 *    tags: [Dates]
 */
router.get('/dates', getDates)
/**
 * @swagger
 * /dates:
 *  get:
 *    summary: Get dates info by date
 *    tags: [Dates]
 */
router.get('/datesbyfecha/:fecha', getDateByDate)

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

router.get('/dates/count', getDatesCount)

/**
 * @swagger
 * /dates:
 *  get:
 *    summary: Get date info by id
 *    tags: [Dates]
 */

router.get('/dates/:id', getDateByID)

/**
 * @swagger
 * /dates:
 *  post:
 *    summary: Save new date
 *    tags: [Dates]
 */
router.post('/dates', saveDate)



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

router.delete('/dates/:id', deleteDate)

/**
 * @swagger
 * /dates:
 *  put:
 *    summary: Update date info by id
 *    tags: [Dates]
 */

router.put('/dates/:id', updateDate)




export default router