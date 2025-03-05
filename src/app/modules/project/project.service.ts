import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  tableData: any = [
    {
      id: 1,
      proName: 'Scadadog',
      build: 'HTML, CSS, Javascript',
      path: 'https://scadadog.com',
    },
    {
      id: 2,
      proName: 'Brown Living',
      build: 'HTML, CSS, Bootstrap, Angular 18, Typescript, NodeJs, MySQL',
      path: 'https://app.brownlivingindia.com',
    },
    {
      id: 3,
      proName: 'Mesh Fullstack App',
      build: 'HTML, CSS, Bootstrap, Angular 19, Typescript, NodeJs, MsSQL',
      path: 'https://mesh-devop.web.app',
    },
    {
      id: 4,
      proName: 'Solo',
      build: 'HTML, CSS, Bootstrap, Javascript, Jquery',
      path: './assets/projects/solo/index.html',
    },
    {
      id: 5,
      proName: 'CrudApp',
      build: 'HTML, CSS, Bootstrap, AngularJS',
      path: './assets/projects/crudapp/index.html',
    },
    {
      id: 6,
      proName: 'Organic',
      build: 'HTML, CSS, Bootstrap, Javascript, Jquery',
      path: './assets/projects/organic/index.html',
    },
    {
      id: 7,
      proName: '3lLogics',
      build: 'HTML, CSS, Bootstrap, Javascript, Jquery',
      path: './assets/projects/3lLogics/index.html',
    },
    {
      id: 8,
      proName: 'Zenith',
      build: 'HTML, CSS, Bootstrap, Javascript, Jquery',
      path: './assets/projects/zenith/index.html',
    },
    {
      id: 9,
      proName: 'Zenith Form',
      build: 'HTML, CSS, Bootstrap, AngularJS',
      path: './assets/projects/zenithform/index.html',
    },
    {
      id: 10,
      proName: 'Currency Converter',
      build: 'HTML, CSS, Bootstrap, Javascript',
      path: './assets/projects/currencyConverter/index.html',
    },
    {
      id: 11,
      proName: 'Filter Table Data',
      build: 'HTML, CSS, Bootstrap, Javascript',
      path: './assets/projects/filterTableData/index.html',
    },
    {
      id: 12,
      proName: 'Full Page Scroll',
      build: 'HTML, CSS, Jquery',
      path: './assets/projects/fullPageScroll/index.html',
    },
    {
      id: 13,
      proName: 'Calculator',
      build: 'HTML, CSS, Javascript',
      path: './assets/projects/calculator/index.html',
    },
    {
      id: 14,
      proName: 'Adding Box',
      build: 'HTML, CSS, Bootstrap, AngularJS',
      path: './assets/projects/addingBox/index.html',
    },
    {
      id: 15,
      proName: 'Interest Calculator',
      build: 'HTML, CSS, AgnularJS',
      path: './assets/projects/interestCalculator/index.html',
    },
    {
      id: 16,
      proName: 'Create Placeholder',
      build: 'HTML, CSS, Javascript',
      path: './assets/projects/createplaceholder/index.html',
    },
    {
      id: 17,
      proName: 'Modern Furniture',
      build: 'HTML, CSS, Bootstrap, Javascript',
      path: './assets/projects/modernFurniture/index.html',
    },
    {
      id: 18,
      proName: 'Crud Bank App',
      build: 'HTML, CSS, Bootstrap, OOPs Javascript',
      path: './assets/projects/oopsCrud/crud.html',
    },
  ];
  constructor() {}
  getAllProject = () => {
    return this.tableData;
  };
}
