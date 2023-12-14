import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss']
})
export class AddMenuComponent implements OnInit {
  addMenuForm!: FormGroup;
  

  constructor(private formBuilder: FormBuilder , private router: Router ,private menuService : MenuService) {}

  ngOnInit() {
    this.addMenuForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, Validators.required],
      category: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.addMenuForm.valid) {
      const menu = this.addMenuForm.value;
      this.menuService.addMenu(menu).subscribe(()=> 
      this.router.navigate(['./dashboard/menu/listeMenu'])
      );
  
  }
}
}
