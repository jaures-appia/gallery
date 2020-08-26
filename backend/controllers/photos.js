const Photo = require('../models/photos')
//const fs = require('fs');

exports.createPhoto = (req, res, next) =>{
    const photoObject = req.body
    console.log(photoObject)
    const photo = new Photo({
        titre: req.body.titre,
        description: req.body.description,
        photoUrl: req.body.photoUrl,
        userId: req.body.userId,
      })
    photo.save()
        .then(() => res.status(201).json({ message: 'photo enregistré !'}))
        .catch(error => res.status(400).json({ error }))
    
}

exports.getAllPhotos = (req, res, next) =>{
    res.json({message: "ok"})
}
