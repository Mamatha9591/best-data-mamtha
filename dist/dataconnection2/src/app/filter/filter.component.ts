import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  searchText: string;
  filters: Object;

  form: FormGroup;

  @Output() autoSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() groupFilters: EventEmitter<any>  = new EventEmitter<any>();

  constructor(private fb: FormBuilder,
              private userService: UserService) { }
              ngOnInit(): void {
                this.buildForm();
              }
            
              buildForm(): void {
                this.form = this.fb.group({
                  Industry: new FormControl(''),
                  Location: new FormControl('')
                });
              }
            
              search(filters: any): void {
                Object.keys(filters).forEach(key => filters[key] === '' ? delete filters[key] : key);
                this.groupFilters.emit(filters);
              }
              
}
