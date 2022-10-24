import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.page.html',
  styleUrls: ['./add-new-item.page.scss'],
})
export class AddNewItemPage implements OnInit {
  taskName: string;
  taskCategory: string;
  taskPriority: string;
  taskDate = '2022-04-21T00:00:00';
  categories = ['Work', 'Task', 'Personal'];

  constructor(
    public modalCtrl: ModalController,
    private dataService: DataService
  ) {}

  ngOnInit() {}

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  async addTask() {
    await this.dataService.addTask({
      done: false,
      name: this.taskName,
      date: this.taskDate,
      category: this.taskCategory,
      priority: this.taskPriority,
    });
    this.dismiss();
  }

  selectCategory(index) {
    this.taskCategory = this.categories[index];
  }
}
