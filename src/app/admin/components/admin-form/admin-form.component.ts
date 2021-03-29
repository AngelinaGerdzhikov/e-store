import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'shared/services/data/data.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.scss']
})
export abstract class AdminFormComponent<T>{
  id: string;
  protected url: string = '';
  data: T = { } as T;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: DataService<T>
  ) { 
    this.id = this.route.snapshot.paramMap.get('id');
    
    if (this.id) {
      this.service.get(this.id)
        .pipe(take(1))
        .subscribe(d => this.data = d);
    }
  }

  save(data: T) {

    if (this.id) {
      this.service.update(this.id, data)
        .then(() => this.router.navigate([`/admin/${this.url}`]))
        .catch(err => console.log(err));
    } else {
      this.service.create(data)
        .then(() => this.router.navigate([`/admin/${this.url}`]))
        .catch(err => console.log(err));     
    }
  }

  delete() {
    if (!confirm(`Are you sure you want to delete this ${this.url}?`)) return;
    
    this.service.delete(this.id)
      .then(() => this.router.navigate([`/admin/${this.url}`]))
      .catch(err => console.log(err));
    
  }
}
