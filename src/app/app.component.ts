import { Component, OnInit, Output } from '@angular/core';
import { UsersService } from './users.service'
import { IUsers } from './Users'
import { google } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService,],
})

export class AppComponent implements OnInit {
  constructor(private service: UsersService) { }
  arUsers: IUsers[];
  addFormS = false;
  UserLat: number;
  UserLong: number;
  zoon = 5;
  lat: number;
  long: number;
  geoLocal: Navigator;
  addBtn: string = "Create new user";
  ngOnInit() {
    this.service.Get()
      .subscribe(users => {
        this.arUsers = users;
      },
      (err: Response) => {
        console.log("error : " + err);
      });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
      });
    }
  }
  deleteUser(i: number) {
    this.arUsers.splice(this.arUsers.indexOf(this.arUsers[i]), 1)
  }
  sortByName() {
    this.arUsers.sort(function (name1, name2) {
      if (name1.name < name2.name) {
        return -1;
      } else if (name1.name > name2.name) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  sortByAge() {
    this.arUsers.sort(function (age1, age2) {
      if (age1.age < age2.age) {
        return -1;
      } else if (age1.age > age2.age) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  addForm() {
    this.addFormS = !this.addFormS;
    this.addBtn = this.addFormS ? "Cancel new adding" : "Create new user"
  }
  showLoc(i: any) {
    this.UserLat = this.arUsers[i].latitude;
    this.UserLong = this.arUsers[i].longitude;
  }
  addUser(myNgForm: any) {
    const body = {
      id: this.arUsers.length,
      name: myNgForm.value.name,
      age: myNgForm.value.age,
      isActive: myNgForm.value.isActive,
      email: myNgForm.value.email,
      latitude: this.lat,
      longitude: this.long,
      picture: myNgForm.value.picture
    };
    this.arUsers.push(body);
    this.addForm();
  }
}