import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-companyinfo',
  templateUrl: './companyinfo.component.html',
  styleUrls: ['./companyinfo.component.css']
})
export class CompanyinfoComponent implements OnInit {
  company: any;
  CompanyName: string;
  data: any = [];
  sector: any
  hide: Boolean = true;
  Cities: any;
  industries: any;
  AlbumSelected: any;
  photos: any;
  Industry: any;
  AlbumSelected1: any;

  searchText: string;
  filters: Object;

  @Input() groupFilters: Object;
  @Input() searchByKeyword: string;
 

  users: any[] = [];
  filteredUsers: any[] = [];

  constructor(private apiService: UserService, public router: Router,
     public activatedRoute: ActivatedRoute,private ref:ChangeDetectorRef) {
    this.data = [];
    this.company = [];
    this.Cities = [];
    this.photos = [];
  }

  ngOnInit() {
    this.getAll();
  }

  ngOnChanges(): void {

    if (this.groupFilters) this.filterUserList(this.groupFilters, this.users);
    
  }

  filterUserList(filters: any, users: any): void {
    this.filteredUsers = this.users;     //Reset User List

    const keys = Object.keys(filters);
    const filterUser = user => keys.every(key => user[key] === filters[key]);

    this.filteredUsers = this.users.filter(filterUser);
    console.log(this.filteredUsers.length)


    this.ref.detectChanges();
  }
  
  getAll(): void {
    this.apiService.getList().subscribe(users =>{
    this.users = users
    this.filteredUsers = this.filteredUsers.length > 0 ? this.filteredUsers : this.users;  
    console.log(this.filteredUsers) 
  })              
  }
  
  //getting Company By name
  getCompanyByName(CompanyName: string) {
    this.router.navigate(['/Company', CompanyName]);
  }
}
