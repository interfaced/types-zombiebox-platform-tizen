export default class TaskManager {
	constructor();
	addTask(creator: TaskCreator, type: TaskType): void;
	protected _startNextTask(): void;
	protected _taskQueue: TaskRecord[];
	protected _currentTask: Promise | null;
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
