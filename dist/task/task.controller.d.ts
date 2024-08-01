import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/task.create.dto';
export declare class TaskController {
    private TaskService;
    constructor(TaskService: TaskService);
    registration(CreateTaskDto: CreateTaskDto): Promise<void>;
}
