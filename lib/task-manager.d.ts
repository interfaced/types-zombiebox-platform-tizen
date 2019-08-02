export default class TaskManager {
  constructor();
  public addTask(creator: TaskCreator, type: TaskType): void;
  protected _startNextTask(): void;
}

export enum TaskType {
  PLAY = 'play',
  STOP = 'stop',
  SUSPEND = 'suspend',
}

export type TaskCreator = () => Promise<any>;

export type TaskRecord = {
  creator: TaskCreator;
  type: TaskType;
};
