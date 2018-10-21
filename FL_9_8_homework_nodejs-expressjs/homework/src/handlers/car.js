const fs = require('fs');
let carsData = JSON.parse(fs.readFileSync(__dirname + '../../../db/data.json'));

const getAll = (req, res) => {
    carsData = JSON.parse(fs.readFileSync(__dirname + '../../../db/data.json'));
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json(carsData);
};

const addNewCar = (req, res) => {
    carsData = JSON.parse(fs.readFileSync(__dirname + '../../../db/data.json'));
    let addingCar = {
        "id": req.body.id,
        "brand": req.body.brand,
        "model": req.body.model,
        "engineVolume": req.body.engine,
        "year": req.body.year
    };
    let carDuplicate = carsData.find(el => el.id === addingCar.id);
    if (carDuplicate) {
        res.status(409).send({ message: 'Car already exists.' });
    } else {
        carsData.push(addingCar);
        fs.writeFileSync(__dirname + '../../../db/data.json', JSON.stringify(carsData));
        res.status(201).json(addingCar);
    }
};

const findById = (req, res) => {
    carsData = JSON.parse(fs.readFileSync(__dirname + '../../../db/data.json'));
    let carId = req.params.id;
    let carDuplicate = carsData.find(el => el.id === parseInt(carId));
    if (carDuplicate) {
        res.status(200).json(carDuplicate)
    } else {
        res.status(404).send();
    }
};

const update = (req, res) => {
    carsData = JSON.parse(fs.readFileSync(__dirname + '../../../db/data.json'));
    let addingCar = {
        "id": req.body.id,
        "brand": req.body.brand,
        "model": req.body.model,
        "engineVolume": req.body.engine,
        "year": req.body.year
    };
    let carDuplicateIndex = carsData.findIndex(el => el.id === parseInt(req.params.id));
    if (carDuplicateIndex === -1) {
        res.status(404).send();
    } else {
        carsData[carDuplicateIndex] = addingCar;
        fs.writeFileSync(__dirname + '../../../db/data.json', JSON.stringify(carsData));
        res.status(200).json(addingCar);
    }
};

const deleteCar = (req, res) => {
    carsData = JSON.parse(fs.readFileSync(__dirname + '../../../db/data.json'));
    let carDuplicateIndex = carsData.findIndex(el => el.id === parseInt(req.params.id));
    if (carDuplicateIndex === -1) {
        res.status(404).send();
    } else {
        carsData.splice(carDuplicateIndex, 1);
        fs.writeFileSync(__dirname + '../../../db/data.json', JSON.stringify(carsData));
        res.status(200).json({ message: 'The car has been successfully removed' });
    }
};

module.exports = {
    getAll,
    addNewCar,
    findById,
    update,
    deleteCar
}