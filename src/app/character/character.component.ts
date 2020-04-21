import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Input()
  data: any = {}

  public cachedLocationValue: any = {};

  constructor() { }

  ngOnInit() {
    this.cachedLocationValue = JSON.parse(JSON.stringify(this.data));
  }

  public resetToCachedvalue(): void {
    console.log('this.cachedValue', this.cachedLocationValue)
    this.data.location.name =  this.cachedLocationValue.location.name
  }

}