import { Component, OnInit } from '@angular/core';
import { Country } from 'src/models/country.model';

@Component({
  selector: 'app-root',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss'],
})
export class Demo2Component implements OnInit {
  constructor() {}

  width: string;
  height: string;
  heigthRadio: string;
  widthRadio: string;
  countries: Country[];
  country: Country

  ngOnInit(): void {
    this.width = '120';
    this.height = '100';

    this.heigthRadio = '120';
    this.widthRadio = '100';
    this.countries = [
      {
        id: 'c01',
        name: 'Country 1',
        flag: 'img1.jpg',
        area: 10000,
      },
      {
        id: 'c02',
        name: 'Country 2',
        flag: 'img2.jpg',
        area: 12354,
      },
      {
        id: 'c03',
        name: 'Country 3',
        flag: 'img3.jpg',
        area: 1245647,
      }
    ];
    this.country = this.countries[0]
  }

  hello = (event: any) => {
    alert(event.target.value);
  };

  changeBackground = (event: any) => {
    document.bgColor = event.target.value;
  };

  changeSize = (event: any) => {
    var result = event.target.value.split('x');
    this.width = result[0];
    this.height = result[1];
  };

  hi(event: any) {
    console.log(event.target.value);
  }

  selectGender = (event: any) => {
    console.log(event.target.value);
  };

  changeSizeRadio = (event: any) => {
    var result = event.target.value.split('x');
    this.widthRadio = result[0];
    this.heigthRadio = result[1];
  };

  selectFile = (event: any) => {
    var file = event.target.files[0];
    console.log(file.name);
    console.log(file.type);
    console.log(file.size);
  };

  selectFiles = (event: any) => {
    var files = event.target.files;
    console.log(files.length);
    for (var i = 0; i < files.length; i++) {
      console.log(files[i].name);
      console.log(files[i].type);
      console.log(files[i].size);
    }
  };

  selectCountry = (event: any) => {
    var index = parseInt(event.target.value)
    this.country = this.countries[index]
  }
}
