const {Schema,model} = require('mongoose');

const bugSchema = new Schema({
    title: {
        type:String,
        required:true,
    },
    priority: {
        type:String,
        required:true,
    },
    description: {
        type:String,
        required:true,
    },
    createdAt: {
        type:Date,
        default:Date.now,
    }

})

const BugModel = model("bug",bugSchema);

module.exports = BugModel;