import { Component, OnInit } from '@angular/core';
import { ClientCreateComponent } from '../../components/client/client-create/client-create.component';
import { ClientListComponent } from '../../components/client/client-list/client-list.component';
import { ClientViewComponent } from '../../components/client/client-view/client-view.component';
import { ClientUpdateComponent } from '../../components/client/client-update/client-update.component';


@Component({
  selector: 'app-client-crud',
  templateUrl: './client-crud.component.html',
  styleUrls: ['./client-crud.component.css']
})
export class ClientCrudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
