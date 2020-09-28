import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DirectiveDeepDriveComponent } from "./directive-deep-drive.component";

const route: Routes = [
    { path: '', component: DirectiveDeepDriveComponent }
]

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})

export class DirectiveRoutingModule { }