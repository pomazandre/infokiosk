import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonsService } from '../../model/persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})

export class PersonsComponent {
  persons: any[] = [];
  id: string;
  caption: string;
  url: string;

  constructor(private _service: PersonsService, private _activateRoute: ActivatedRoute) {
    this.id = _activateRoute.snapshot.params['id'];
    if (this.id === 'ktc') {
      this.caption = "Конструкторско-технический центр";
      this.url = "../assets/ktc.png";
      _service.url = '/assets/ktc.json'
    } else {
      this.caption = "Центр управления перевозками";
      this.url = "../assets/rw.png";
      _service.url = '/assets/cup.json'
    }
  }

  ngOnInit() {
    this._service.get().subscribe(resp => {
      this.persons = resp.values;
    });
  }


}
