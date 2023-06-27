import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    StarRatingComponent
  ],
  imports: [
    CommonModule,
    NgbModule

  ],
  exports: [ //to be able to use the star component's data (variables,..) 's content in other modules's components
    StarRatingComponent
  ]
  

})
export class FeatureModule { }
