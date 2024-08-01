import { TaskService } from './task.service';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateTaskDto } from './dto/task.create.dto';

@Controller('task')
export class TaskController {
  constructor(private TaskService: TaskService) {}
  @UseGuards(AuthGuard('jwt'))
  @ Post()
 
    async registration(@Body() CreateTaskDto:CreateTaskDto){
      console.log("createUserDto",CreateTaskDto)
      return this.TaskService.createTask(CreateTaskDto);
    
    }
  }

