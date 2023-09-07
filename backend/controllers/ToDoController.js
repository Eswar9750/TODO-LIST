const ToDoModel = require('../models/ToDoModel');


module.exports.getToDo = async (req, res) => {
    const toDo = await ToDoModel.find();
    return res.send(toDo);
}


module.exports.saveToDo = async (req, res) => {

    const { text } = req.body;

    ToDoModel.create({ text }).then((data) => {
        console.log('Added Succesfully !!!');
        console.log(data);
        return res.send(data);
    }).catch(err => console.log(err.message));



    // try {
    //     const newData = new ToDoModel({ text });
    //     newData.save();
    //     return res.json(await ToDoModel.find());
    // }
    // catch (err) {
    //     console.log(err.message);
    // }
}


module.exports.deleteToDo = (req, res) => {
    const { _id } = req.body;

    console.log('id ---> ', _id);

    ToDoModel.findByIdAndDelete(_id).then(
        () => res.set(201).send("Deleted Successfully...")).catch((err) => console.log(err));
}

module.exports.updateToDo = (req, res) => {
    const { _id, text } = req.body;

    ToDoModel.findByIdAndUpdate(_id, { text }).then(
        () => res.set(201).send("Updated Successfully...")).catch((err) => console.log(err));
}

