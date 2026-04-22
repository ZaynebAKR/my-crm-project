import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-insomea-dashboard',
  templateUrl: './insomea-dashboard.component.html',
  styleUrls: ['./insomea-dashboard.component.css']
})
export class InsomeaDashboardComponent implements OnInit {

  totalClients = 0;
  totalVendors = 0;
  totalUsers = 0;

  users: any[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadStats();
    this.loadUsers();
  }

loadStats() {
  this.adminService.getStats().subscribe(res => {
    this.totalClients = res.clients;
    this.totalVendors = res.vendors;
    this.totalUsers = res.totalUsers;
  });
}

  loadUsers() {
    this.adminService.getUsers().subscribe(res => {
      this.users = res;
    });
  }
}