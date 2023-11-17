import Tent from '../models/TentModel.js'

export const getAllTents = async(req, res) => {
    try {
        const tents = await Tent.find()
        res.status(200).json(tents)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const getTent = async(req, res) => {
    
    const id = req.params.id

    try {
        
        const tent = await Tent.findById(id)
        res.status(200).json(tent)

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}