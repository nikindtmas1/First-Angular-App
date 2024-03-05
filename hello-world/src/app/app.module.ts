import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core"; 


import { CoursesComponent } from "./courses.component";
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
        
        CoursesComponent,
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [],
})

export class AppModule {}