import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as FileSaver from 'file-saver';  
import * as XLSX from 'xlsx';

//Declearing the type of file
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

//Declearing the extension
const EXCEL_EXTENSION = '.xlsx'
@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {
  exportAsPdfFile(callerData: any, arg1: string) {
    throw new Error("Method not implemented.");
  }

  constructor(private http: HttpClient) { }

  public exportAsExcelFile(json: any[], excelFileName: string): void {

    //Defining the excel sheet format
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    console.log('worksheet',worksheet);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  //Method for saving a file into system
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  } 
}
