import { Component, OnInit, Input, NgZone } from '@angular/core';
import { UsersService } from '../users.service'
import { IUsers } from '../Users'
import { MapsAPILoader } from '@agm/core';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private service: UsersService) { }
  @Input() userLat: any;
  @Input() userLong: any;
  @Input() arUsers: IUsers[];
  @Input()zoom: number;
  @Input() userId: any;
  ngOnInit() {
    this.zoom = 4;
  }
}