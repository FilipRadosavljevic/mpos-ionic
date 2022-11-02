/* eslint-disable @typescript-eslint/no-shadow */
import { Injectable } from '@angular/core';
import {
  collection,
  Firestore,
  collectionData,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from '@angular/fire/firestore';

export interface Task {
  id?: number;
  date: string;
  done: boolean;
  name: string;
  category: string;
  priority: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private firestore: Firestore) {}

  getTasks() {
    const tasksRef = collection(this.firestore, 'tasks');
    return collectionData(tasksRef, { idField: 'id' });
  }

  addTask(task: Task) {
    const taskRef = collection(this.firestore, 'tasks');
    return addDoc(taskRef, task);
  }

  deleteTask(task: Task) {
    const taskRef = doc(this.firestore, `tasks/${task.id}`);
    console.log(task);

    return deleteDoc(taskRef);
  }

  updateTask(task: Task) {
    const taskRef = doc(this.firestore, `tasks/${task.id}`);
    return updateDoc(taskRef, {
      date: task.date,
      done: task.done,
      name: task.name,
      category: task.category,
      priority: task.priority,
    });
  }
}
