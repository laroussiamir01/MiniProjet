import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddCommandeComponent} from "./add-commande/add-commande.component";
import {ListeCommandeComponent} from "./liste-commande/liste-commande.component";
import {UpdateCommandeComponent} from "./update-commande/update-commande.component";
import {AffecterProduitComponent} from "./affecter-produit/affecter-produit.component";



const routes: Routes = [
    { path: 'listCommande', component: ListeCommandeComponent },
      { path: 'addCommande', component: AddCommandeComponent },
      { path: 'updateCommande/:id', component: UpdateCommandeComponent },
      { path: 'affecterProduit/:id', component: AffecterProduitComponent },


  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CommandefRoutingModule { }
