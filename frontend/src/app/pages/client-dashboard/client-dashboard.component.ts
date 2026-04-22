import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {

  username: string = '';
  role: string = '';

  licenses: any[] = [];
  invoices: any[] = [];
  notifications: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadUser();
    this.loadClientData();
  }

  loadUser() {
    this.username = localStorage.getItem('username') || 'Client';
    this.role = localStorage.getItem('role') || 'CLIENT';
  }

  loadClientData() {
    // TEMP MOCK until backend endpoints exist
    this.licenses = [
      { name: 'Office 365', expiry: '2026-06-01', status: 'Active' },
      { name: 'Azure DevOps', expiry: '2026-04-20', status: 'Expiring Soon' }
    ];

    this.invoices = [
      { id: 1, amount: 120, status: 'Paid' },
      { id: 2, amount: 80, status: 'Pending' }
    ];

    this.notifications = [
      'Azure DevOps expires in 4 days'
    ];
  }

  renewLicense(license: any) {
    alert('Renew request sent for ' + license.name);
  }

  viewInvoice(invoice: any) {
    alert('Viewing invoice #' + invoice.id);
  }

  logout() {
    localStorage.clear();
    window.location.href = '/login';
  }
}