import express from 'express'
import { log } from '../../middlewares/logger.middleware.js'
import { getMsgs, getMsgById, addMsg, updateMsg, removeMsg } from './msg.controller.js'

export const messageRoutes = express.Router()

messageRoutes.get('/', log, getMsgs)
messageRoutes.get('/:id', getMsgById)
messageRoutes.post('/', addMsg)
messageRoutes.put('/:id', updateMsg)
messageRoutes.delete('/:id', removeMsg)
