import { RegisterDialogComponent } from './authentication/register-dialog/register-dialog.component';
import { MdDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Person } from './shared/types/Person';
import { AuthService } from './authentication/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  person: Person = new Person();

  constructor(private authService: AuthService, private mdDialog: MdDialog) {
  }

  register() {
    let dialogRef = this.mdDialog.open(RegisterDialogComponent, {
      height: '400px',
      width: '300px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog closed.');
    });

    // this.person.firstname = 'محمد';
    // this.person.lastname = 'احمدی';
    // this.person.mobile = '09171702406';
    // this.person.username = 'mohammad';
    // this.person.email = 'mohammad@khodamooz.com';
    // this.person.realm = 'khodamooz';
    // this.person.password = '123';

    // this.authService.register(this.person)
    //   .subscribe(
    //   res => console.log(res),
    //   error => Observable.throw(error)
    //   );
  }

}
