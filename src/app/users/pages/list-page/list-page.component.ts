import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})
export class ListPageComponent implements OnInit {
  users: any[] = [];
  selectedUser: any = null;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  showDetails(user: any): any {
    this.selectedUser = user;
  }

  closeDetails(): void {
    this.selectedUser = null;
  }

  deleteUser(userId: number): void {
    this.selectedUser = null;
    const confirmDelete = confirm('¿Deseas eliminar al usuario?');
    if (confirmDelete) {
      this.users = this.users.filter((user) => user.id !== userId);
    }
  }
}
