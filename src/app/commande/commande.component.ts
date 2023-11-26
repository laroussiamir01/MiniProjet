import {Component, OnInit} from '@angular/core';
import {CommandeService} from "./shared/service/commande.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DataModel} from "../shared/data.model";
import {ActivatedRoute} from "@angular/router";
import {Commande} from "./shared/model/commande.module";

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit{

  commandes: Commande[] = [];

  commandeForm: FormGroup;

  commande = new Commande();

  commandeModel: DataModel[];

  constructor(public commandeService: CommandeService, private fb: FormBuilder, private route: ActivatedRoute) {
    this.commandeForm = new FormGroup({});
    this.commandeModel = [];
  }

  ngOnInit() {
    this.commandes = this.route.snapshot.data['commandes'];

    this.commandeForm = this.fb.group({
      nomCommandeur: ['', Validators.required],
      numTel: '',

    });

    this.commandeModel = [
      new DataModel('id', 'ID', 'number', true, []),
      new DataModel('nomCommandeur', 'Nom Commandeur', 'string', false, []),
      new DataModel('numTel', 'Numéro téléphone', 'number', false, []),
    ];
  }

 // protected readonly CommandeService = CommandeService;
}
