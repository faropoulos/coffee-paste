import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { AdminCompaniesService } from '@coffee-admin/services';

import { Company } from '@coffee-shared/models';

@Component({
  selector: 'admin-companies',
  templateUrl: './admin-companies.component.html',
  styleUrls: ['./admin-companies.component.scss'],
  host: {
    "class":"route-wrapper"
  }
})
export class AdminCompaniesComponent implements OnInit {
  companies: Company[];
  editState: boolean = false;
  companyToEdit: Company;
  isSyncing: boolean = false;
  syncBtnIcon: string = 'sync';
  displayedColumns = ['title', 'status','userActions'];
  dataSource: MatTableDataSource<Company>;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public companyService: AdminCompaniesService) { }

  ngOnInit() {
    //this.menuService.setOptions('settings');
    this.companyService.getCompanies().subscribe(companies => {
      console.log(companies);
      //this.companies = companies;
      this.dataSource = new MatTableDataSource(companies);
      this.dataSource.sort = this.sort;
    });
  }

  createCompany(){
    //this.settingsDialogService.open(CompanyCreateComponent, null).subscribe();
  }

  deleteCompany(event, company) {
    const response = confirm('are you sure you want to delete?');
    if (response ) {
      this.companyService.deleteCompany(company);
    }
    return;
  }

  editCompany(event, company) {
    this.editState = !this.editState;
    this.companyToEdit = company;
  }

  updateCompany(company) {
    this.companyService.updateCompany(company);
    this.companyToEdit = null;
    this.editState = false;
  }

  openConfirmDialog(company: Company){
    let data: any = {
      title: `Delete ${company.title}?`,
      message: 'By doing so, you will delete all the related Data such as Projects, Issues, Tasks etc.',
      confirmButton: 'DELETE',
      cancelButton: 'CANCEL',
      color: 'warn'
    };
    // this.dialogsService.confirm(data).subscribe(res => {
    //   if(res){
    //     this.companiesService.remove(company); 
    //   }
    // });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

}