import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/task.create.dto';
import { Task } from './entity/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(private TaskService: TaskService) {}
  async createTask(CreateTaskDto:CreateTaskDto){
    console.log(CreateTaskDto)
    const{name,description,dueDate,status,media}=CreateTaskDto
  }
}
