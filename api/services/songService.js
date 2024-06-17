const SongModel = require('../models/song');
module.exports = { 
    getAll: (req, res) => {
        SongModel.find({})
            .then(data => {
                res.json(data);
            })
            .catch(error => {
                res.status(500).json(error);
            });
    },
    add: async (req, res) => {
        try {
            const savedItem = await new SongModel(req.body).save();
            res.json(savedItem);
            

        } catch (error) {
            res.status(500).json(error);
        }
    }
}