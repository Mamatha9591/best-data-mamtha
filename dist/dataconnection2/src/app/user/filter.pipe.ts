import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'myfilter',
})
// export class FilterPipe implements PipeTransform {
//     transform(items: any[], value: string,prop:string,data: any, search?: string, propertyName?: string, propertyName2?: string): any[] {
//         if (!items) return [];
//         if (!value) return items;

//         // return items.filter(singleItem =>
//         //     singleItem[prop].toLowerCase().includes(value.toLowerCase())
//         // );

//         if (search === undefined) {
//             return data;
//         } else {
//             let filteredData = data.filter(obj => obj[propertyName].toLowerCase().includes(search.toLowerCase()));
//             if (propertyName2) {
//                 filteredData = filteredData.concat(data.filter(obj => obj[propertyName2].toLowerCase().includes(search.toLowerCase())));
//             }
//             return filteredData;
//         }
//     }
   
//     }

export class FilterPipe implements PipeTransform {
    transform(data: any, search?: string, propertyName?: string, propertyName2?: string,propertyName3?:string): any {
        if (search === undefined) {
            return data;
        } else {
            let filteredData = data.filter(obj => obj[propertyName].toLowerCase().includes(search.toLowerCase()));
            if (propertyName2) {
                filteredData = filteredData.concat(data.filter(obj => obj[propertyName2].toLowerCase().includes(search.toLowerCase())));
            }
            if (propertyName3) {
                filteredData = filteredData.concat(data.filter(obj => obj[propertyName3].toLowerCase().includes(search.toLowerCase())));
            }
            return filteredData;
        }
    }
}