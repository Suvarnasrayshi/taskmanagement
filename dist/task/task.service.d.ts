import { CreateTaskDto } from './dto/task.create.dto';
export declare class TaskService {
    private TaskService;
    constructor(TaskService: TaskService);
    createTask(CreateTaskDto: CreateTaskDto): Promise<void>;
}
