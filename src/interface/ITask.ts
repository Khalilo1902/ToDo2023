export interface ITask {
  id: string;
  name: string;
  isDone? : boolean;
  createdAt: Date;
}
