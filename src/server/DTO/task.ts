import { z } from "zod";

export const createTaskSchema = z.object({
  title: z
    .string()
    .min(2, "El titulo de la tarea debe ser mayor o igual a 2 caracteres")
    .max(60, "El titulo de la tarea no puede sobrepasar los 50 caracteres."),
  userId: z.string(),
});

export class CreateTask {
  @Length(2, 30)
  title: string;
  userId: string;

  constructor(data: createTaskArgs) {
    this.title = data.title;
    this.userId = data.userId;
  }
}

interface updateTaskArgs {
  id: string;
  title?: string;
  userId: string;
  completed?: boolean;
}

export class UpdateTask {
  id: string;
  @IsOptional()
  @Length(2, 50)
  title: string;

  @IsOptional()
  completed: boolean;

  constructor(data: updateTaskArgs) {
    this.id = data.id;
    if (data.title) this.title = data.title;
    if (data.completed) this.completed = data.completed;
  }
}

interface deleteTaskArgs {
  id: string;
}

export class DeleteTask {
  id: string;

  constructor(data: deleteTaskArgs) {
    this.id = data.id;
  }
}
