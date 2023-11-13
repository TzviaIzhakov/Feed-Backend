import { msgService } from './msg.service.js'
import { logger } from '../../services/logger.service.js'

export async function getMsgs(req, res) {
    try {
        let { txt, email } = req.query
        const filterBy = {
            txt: txt || '',
           email: email || ''
        }
        
        logger.debug('Getting Msgs', filterBy)
        const msgs = await msgService.query(filterBy)
        res.send(msgs)
    } catch (err) {
        logger.error('Failed to get msgs', err)
        res.status(500).send({ err: 'Failed to get msgs' })
    }
}

export async function getMsgById(req, res) {
    try {
        const { id } = req.params
        const msg = await msgService.getById(id);
        res.send(msg)
    } catch (err) {
        logger.error('Failed to get msg', err)
        res.status(500).send({ err: 'Failed to get msg' })
    }
}

export async function addMsg(req, res) {
    try {
        const {txt, email} = req.body
        const msg = {
           txt: txt || '',
           email: email || ''
        }
        const savedMsg = await msgService.add(msg)
        res.send(savedMsg)
    } catch (err) {
        logger.error('Failed to add msg', err)
        res.status(500).send({ err: 'Failed to add msg' })
    }
}

export async function updateMsg(req, res) {
    try {
        const {txt, email , _id} = req.body
        const msg = {
            txt: txt || '',
            email: email || '',
            _id
         }
        const savedMsg = await msgService.update(msg)
        res.send(savedMsg)
    } catch (err) {
        logger.error('Failed to update msg', err)
        res.status(500).send({ err: 'Failed to update msg' })
    }
}

export async function removeMsg(req, res) {
    try {
        const { id } = req.params
       await msgService.remove(id)
        res.send()
    } catch (err) {
        logger.error('Failed to remove msg', err)
        res.status(500).send({ err: 'Failed to remove msg' })
    }
}
