import { Request,Response } from "express";
import {TaskManager} from "../taskManager";

const taskManager=new TaskManager();

export const getTasks=async(req:Request,res:Response):Promise<void>=>{
    try {
        const tasks = await taskManager.getTask();

        res.status(200).render('todo',{
            tasks
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'An error occurred while fetching tasks',
        });
    }
};

export const addTasks=async(req:Request,res:Response):Promise<void>=>{
    try {
       const {title,description}=req.body;
       await taskManager.createTask(title,description)
       res.json({success:true,message:'Task Added'});
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'An error occurred while adding tasks',
        });
    }
}

export const deleteTasks=async(req:Request,res:Response):Promise<void>=>{
    try {
        const {taskId}=req.body;
        await taskManager.deleteTask(taskId)
        res.json({success:true,message:'Task Deleted'});
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'An error occurred while deleting tasks',
        });
    }
}
export const updateStatus=async(req:Request,res:Response):Promise<void>=>{
    try {
        const id=req.params.id
        await taskManager.markCompleted(id)
        res.redirect('/')
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'An error occurred while deleting tasks',
        });
    }
}
export const updateTasks=async(req:Request,res:Response):Promise<void>=>{
    try {
        const id=req.params.id
        const {title,description}=req.body
        await taskManager.updateTask(id,title,description);
        res.json({success:true,message:'Task Updated' ,id});
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'An error occurred while updating tasks',
        });
    }
}



