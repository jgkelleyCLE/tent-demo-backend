import express from 'express'
import { getAllTents, getTent } from '../controllers/Tents.js'

const router = express.Router()

router.get('/', getAllTents)

router.get('/:id', getTent)

export default router