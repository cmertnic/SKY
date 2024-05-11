const mongoose = require ("mongoose");

const taskSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:false,
        },
        descr:{
            type:String,
            required:false,
        },
    },
    {
        timestamps:true,
    }
);
const ToDo=mongoose.model("task",taskSchema);
module.exports=ToDo;