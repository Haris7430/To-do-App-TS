import { Task,TaskInterface } from "./models/taskModel";

export class TaskManager{
    public async createTask(title:String,description:String):Promise<TaskInterface>{
        const task=new Task({title,description,isCompleted:false});
        return await task.save()
    }

    public async getTask():Promise<TaskInterface[]>{
        return Task.find();
    }
    
    public async updateTask(id:string,title:string,description:string):Promise<TaskInterface | null>{
        const updatedTask= await Task.findByIdAndUpdate(id,
            {title,description},{new:true}
        );
        return updatedTask;
    }

    public async deleteTask(id:string):Promise<TaskInterface | null>{
        return Task.findByIdAndDelete(id)
    }

    public async markCompleted(id:string):Promise<TaskInterface |null>{
        return Task.findByIdAndUpdate(id,

            {isCompleted:true},
            {new:true}
        );
    }


}


