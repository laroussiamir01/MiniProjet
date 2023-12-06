import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowQuestionComponent} from "./show-question/show-question.component";
import {DetailQuestionComponent} from "./detail-question/detail-question.component";
import {DeleteQuestionComponent} from "./delete-question/delete-question.component";
import {UpdateQuestionComponent} from "./update-question/update-question.component";
import {AddQuestionComponent} from "./add-question/add-question.component";
import {ListeQuestionComponent} from "./liste-question/liste-question.component";

const routes: Routes = [
  {
    path: 'question',

    children: [
      { path: '', component: ListeQuestionComponent  },
      { path: 'addQst', component: AddQuestionComponent },
      { path: 'detailQst/:idQuestion', component: DetailQuestionComponent },
      { path: 'deleteQst/:idQuestion', component: DeleteQuestionComponent },
      { path: 'editQst/:idQuestion', component: UpdateQuestionComponent },

    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
