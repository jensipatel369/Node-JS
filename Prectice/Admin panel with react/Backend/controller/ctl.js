const Schema = require("../model/schema")

module.exports.login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const admin = await Schema.findOne({ email: email });

  if (!admin) {
    res.json({ message: "User not found" , auth: false});
  }
  else if (admin.password != password) {
    res.json({ message: "Invalid password", auth: false });
  }
  else {
    res.json({ message: "Login successful", auth: true });
  }
};

module.exports.addData = async (req, res) => {
    await Schema.create(req.body).then((data) => {
        res.json({ "msg": "Data added successfully..!", "data": data })
    })
}
module.exports.getData = async (req, res) => {
    await Schema.find({}).then((data) => {
        res.json({ "data": data });
    });
}
module.exports.deleteData = async (req, res) => {
    await Schema.findByIdAndDelete(req.query.id).then((data) => {
        res.json({ "msg": "Data deleted sccessfully...!", "data": data })
    })
}
module.exports.updateData = async (req, res) => {
    await Schema.findByIdAndUpdate(req.body._id, req.body).then((data) => {
        res.json({ "msg": "Data updated sccessfully...!", "data": data })
    })
}