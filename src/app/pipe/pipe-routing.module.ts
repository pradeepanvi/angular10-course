import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BuildInPipesComponent } from './build-in-pipes/build-in-pipes.component';
import { DatePipeComponent } from "./build-in-pipes/date-pipe/date-pipe.component";
import { PipeComponent } from "./pipe.component";

const route: Routes = [
    {
        path: '',
        component: PipeComponent,
        children: [
            { path: '', component: BuildInPipesComponent },
            { path: 'date-pipe', component: DatePipeComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class PipeRoutingModule { }