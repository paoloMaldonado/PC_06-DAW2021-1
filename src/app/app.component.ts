import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  objCurso: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<any>("https://WEB2021pmaldonado.airepods.repl.co")
      .subscribe((data) => {
        this.objCurso = data;
        console.log(data);
      });
  }
}
