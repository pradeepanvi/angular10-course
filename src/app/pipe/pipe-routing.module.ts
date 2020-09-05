import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DatePipeComponent } from "./build-in-pipes/date-pipe/date-pipe.component";

const routes: Routes = [
    {
        path: '',
        component: DatePipeComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PipeRoutingModule { }