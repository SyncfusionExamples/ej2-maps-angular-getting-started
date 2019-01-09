import { Component, OnInit } from '@angular/core';
import { world_Map } from './worldMap';
import {colorMapping} from './colormapping';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  public shapeData: object;
  public dataSource: object;
  public shapeSettings: object;
  public markerdataSource: object[];
  public tooltipSettings: object;
  public legendSettings: object;
  ngOnInit() {
    this.shapeData = world_Map;
    this.dataSource = colorMapping;
    this.shapeSettings = { colorValuePath: 'color', };
    this.markerdataSource = [
      { latitude: 37.6276571, longitude: -122.4276688, name: 'San Bruno' },
      { latitude: 33.5302186, longitude: -117.7418381, name: 'Laguna Niguel' },
      { latitude: 40.7424509, longitude: -74.0081468, name: 'New York' },
      { latitude: -23.5268201, longitude: -46.6489927, name: 'Bom Retiro' },
      { latitude: 43.6533855, longitude: -79.3729994, name: 'Toronto' },
      { latitude: 48.8773406, longitude: 2.3299627, name: 'Paris' },
      { latitude: 52.4643089, longitude: 13.4107368, name: 'Berlin' },
      { latitude: 19.1555762, longitude: 72.8849595, name: 'Mumbai' },
      { latitude: 35.6628744, longitude: 139.7345469, name: 'Minato' },
      { latitude: 51.5326602, longitude: -0.1262422, name: 'London' }
  ];
  this.tooltipSettings = { visible: true, valuePath: 'name' };
  this.legendSettings = {
    visible: true
};
  }
}
