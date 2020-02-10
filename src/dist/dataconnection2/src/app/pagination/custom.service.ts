import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomService {
  obj: any
  config = {
    objPerPage: 25,
    currentPage: 1,
    totalObj: this.obj=[]
  };

  public maxSize: number = 24;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  public labels: any = {
      inputLabel: '',
      nextLabel: '',
      screenReaderPaginationLabel: 'Pagination',
      screenReaderPageLabel: 'page',
      screenReaderCurrentLabel: `You're on page`
  };

  constructor() { }
  onPageChange(event){
    console.log(event);
    this.config.currentPage = event;
  }
}
