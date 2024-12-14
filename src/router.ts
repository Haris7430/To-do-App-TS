import {Router} from "express";
import { addTasks, getTasks,deleteTasks ,updateStatus,updateTasks} from "./controllers/taskController";
const router: Router = Router();


//roters

router.get('/',getTasks);
router.post('/tasks',addTasks);
router.delete('/delete',deleteTasks)
router.post('/update/:id',updateStatus);
router.put('/update-task/:id',updateTasks);




export default router;