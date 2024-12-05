import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  tableData: any = [
    {
      id: 1,
      proName: 'Solo',
      build: 'HTML, CSS, Bootstrap, JS, Jquery',
      path: './assets/projects/solo/index.html',
    },
    {
      id: 2,
      proName: 'CrudApp',
      build: 'HTML, CSS, Bootstrap, AngularJS',
      path: './assets/projects/crudapp/index.html',
    },
    {
      id: 3,
      proName: 'Organic',
      build: 'HTML, CSS, Bootstrap, JS, Jquery',
      path: './assets/projects/organic/index.html',
    },
    {
      id: 4,
      proName: '3lLogics',
      build: 'HTML, CSS, Bootstrap, JS, Jquery',
      path: './assets/projects/3lLogics/index.html',
    },
    {
      id: 5,
      proName: 'Zenith',
      build: 'HTML, CSS, Bootstrap, JS, Jquery',
      path: './assets/projects/zenith/index.html',
    },
    {
      id: 6,
      proName: 'Zenith Form',
      build: 'HTML, CSS, Bootstrap, AngularJS',
      path: './assets/projects/zenithform/index.html',
    },
    {
      id: 7,
      proName: 'Currency Converter',
      build: 'HTML, CSS, Bootstrap, JS',
      path: './assets/projects/currencyConverter/index.html',
    },
    {
      id: 8,
      proName: 'Dropdown Select',
      build: 'HTML, CSS, AngularJS',
      path: './assets/projects/dropdownSelect/index.html',
    },
    {
      id: 9,
      proName: 'Filter Table Data',
      build: 'HTML, CSS, Bootstrap, JS',
      path: './assets/projects/filterTableData/index.html',
    },
    {
      id: 10,
      proName: 'Full Page Scroll',
      build: 'HTML, CSS, Jquery',
      path: './assets/projects/fullPageScroll/index.html',
    },
    {
      id: 11,
      proName: 'Calculator',
      build: 'HTML, CSS, JS',
      path: './assets/projects/calculator/index.html',
    },
    {
      id: 12,
      proName: 'Adding Box',
      build: 'HTML, CSS, Bootstrap, AngularJS',
      path: './assets/projects/addingBox/index.html',
    },
    {
      id: 13,
      proName: 'Interest Calculator',
      build: 'HTML, CSS, AgnularJS',
      path: './assets/projects/interestCalculator/index.html',
    },
    {
      id: 14,
      proName: 'Create Placeholder',
      build: 'HTML, CSS, JS',
      path: './assets/projects/createplaceholder/index.html',
    },
    {
      id: 15,
      proName: 'Modern Furniture',
      build: 'HTML, CSS, Bootstrap, JS',
      path: './assets/projects/modernFurniture/index.html',
    },
    {
      id: 16,
      proName: 'Crud Bank App',
      build: 'HTML, CSS, Bootstrap, OOPs JS',
      path: './assets/projects/oopsCrud/crud.html',
    },
  ];
  constructor() {}
  getAllProject = () => {
    return this.tableData;
  };
}
