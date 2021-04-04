import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { CanComponentDeactivate } from 'shared/services/can-deactivate-guard/can-deactivate-guard.service';
import { DataService } from 'shared/services/data/data.service';

@Component({
  selector: 'admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.scss']
})
export abstract class AdminFormComponent<T> implements CanComponentDeactivate {
  protected url: string = '';
  id: string;
  data: T = { } as T;
  dataForm: FormGroup;
  changesSaved: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    protected service: DataService<T>,
    @Inject('TCreator') private TCreator: { new(...args: any): T }
  ) { }

  ngOnInit() {
    this.createForm();
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.service.get(this.id).pipe(take(1))
        .subscribe(d => {
          this.data = new this.TCreator(d);
          this.dataForm.patchValue(this.data);
          this.populateForm(this.data);
        }); 
    } else {
      this.data = new this.TCreator();
    }    
  }
  protected abstract createForm(): void;
  protected populateForm(data: T): void {};

  save() {
    if (this.id) {
      this.service.update(this.id, this.dataForm.value)
        .then(() => this.onSavedChanges())
        .catch(err => console.log(err));
    } else {
      this.service.create(this.dataForm.value)
        .then(() => this.onSavedChanges())
        .catch(err => console.log(err));     
    }
  }

  delete() {
    if (!confirm(`Are you sure you want to delete this ${this.url}?`)) return;
    
    this.service.delete(this.id)
      .then(() => this.router.navigate([`/admin/${this.url}`]))
      .catch(err => console.log(err));
  }  

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.changesSaved) {
      return confirm('You have unsaved data. Are you sure you want to exit?');
    } else {
      return true;
    }
  }

  private onSavedChanges() {
    this.changesSaved = true;
    this.router.navigate([`/admin/${this.url}`]);
  }
}
