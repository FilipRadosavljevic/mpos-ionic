import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

export interface Task {
  id?: string;
  done: boolean;
  name: string;
  category: string;
  priority: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  getTask() {
    const tasksRef = collection(this.firestore, 'tasks');
    return collectionData(tasksRef);
  }

}
