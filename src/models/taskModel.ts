import mongoose, {Schema, Document} from "mongoose";


export interface TaskInterface extends Document{
    title:String;
    description:String;
    isCompleted:Boolean;
}
const taskSchema :Schema =new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },isCompleted:{
        type:Boolean,
        reruired:true
    }

})

export const Task= mongoose.model<TaskInterface>('Task',taskSchema);    