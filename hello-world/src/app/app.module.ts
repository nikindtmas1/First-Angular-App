import { BrowserModule } from "@angular/platform-browser";
import { NgModel } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses.component";

@NgModel({
    declarations: [
        AppComponent,
        CoursesComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})

export class AppModule {}