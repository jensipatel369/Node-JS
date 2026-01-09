const Schema = require("../model/firstSchema");

module.exports.addData = async(req,res)=>{
    await Schema.create(req.body).then((data)=>{
        res.json({"msg" : "Data added successfully","data":data})
    })
}
// module.exports.getData = async (req, res) => {
//     const data = await Schema.find();
//     res.json(data);
// };
// module.exports.deleteData = async(req.res)=>{
    
// }