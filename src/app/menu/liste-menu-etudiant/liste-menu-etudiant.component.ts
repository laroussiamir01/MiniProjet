import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { Menu } from 'src/app/model/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-liste-menu-etudiant',
  templateUrl: './liste-menu-etudiant.component.html',
  styleUrls: ['./liste-menu-etudiant.component.scss']
})
export class ListeMenuEtudiantComponent implements OnInit {
  menus: Menu[] = [];
  data: any[] = [];
  pdfGenerated = false;

  constructor(private menuService: MenuService, private router: Router) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.menuService.getAllMenus().subscribe(data => {
      this.menus = data;
      this.data = this.menus.map(menu => ({
        Name: menu.name,
        Description: menu.description,
        Price: menu.price,
        Category: menu.category
      }));
      console.log(this.menus);

    });
  }




  async generatePdfForMenu(menu: any) {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();


    const titleFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const textFont = await pdfDoc.embedFont(StandardFonts.Helvetica);




    const menuText = `
        Name: ${menu.name}
        Description: ${menu.description}
        Price: ${menu.price}
        Category: ${menu.category}
    `;

    page.drawRectangle({
        x: 50,
        y: height - 160,
        width: width - 100,
        height: 120,
        color: rgb(0.95, 0.95, 0.95),
    });
    page.drawText(menuText, {
        x: 60,
        y: height - 170,
        font: textFont,
        color: rgb(0, 0, 0),
        size: 14,
    });

    page.drawLine({
        start: { x: 50, y: height - 170 },
        end: { x: width - 50, y: height - 170 },
        thickness: 1,
        color: rgb(0, 0, 0),
    });

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });

    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `menu_${menu.idMenu}.pdf`;
    link.click();
}



}
