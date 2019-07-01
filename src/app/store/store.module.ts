import { NgModule } from '@angular/core';
import { ModelModule } from './../model/model.module';
import { FormsModule } from '@angular/forms';
import { StoreComponent } from './store.component';

@NgModule({
    imports: [ModelModule, FormsModule],
    declarations: [StoreComponent],
    exports: [StoreComponent]
})
export class StoreModule { }
