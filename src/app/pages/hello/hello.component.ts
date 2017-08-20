import { Component, OnInit, ViewChild } from '@angular/core';
import * as faker from 'faker';

@Component({
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  title = 'Hello Title';

  list = [];

  adminInfo: any = {};

  value: string;

  code = 'E11-2016a-11b-12c';

  stringCode = '1232get2222222you';

  @ViewChild('input1') input1: any;

  ngOnInit() {
    for (let i = 0; i < 50; i++) {
      this.list.push({
        name: faker.name.findName(),
        email: faker.internet.email(),
        street: faker.address.streetName()
      });
    }
    setTimeout(() => {
      this.adminInfo.cards = {};
      this.adminInfo.cards.mainCard = faker.random.number();
    }, 2000);
  }

  getValue($event) {
    // console.log($event);
  }
}
