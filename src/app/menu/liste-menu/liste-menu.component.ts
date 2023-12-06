import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/model/menu';
import { PDFDocument, StandardFonts } from 'pdf-lib';
import { rgb } from 'pdf-lib';
import { MenuService } from 'src/app/services/menu.service';
@Component({
  selector: 'app-liste-menu',
  templateUrl: './liste-menu.component.html',
  styleUrls: ['./liste-menu.component.scss']
})
export class ListeMenuComponent implements OnInit {
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
     // this.exportToPDF(); // Déplacez cette ligne ici
    });
  }

  deleteMenu(menu: Menu) {
    this.menuService.deleteMenu(menu.id).subscribe(() => {
      console.log("Menu deleted successfully.");
      this.loadData();
    });
  }

  updateMenu(id: any) {
    this.router.navigate(['/dashboard/menu/updateMenu', id]);
  }
  async generatePdfForMenu(menu: any) {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();

    // Utilisez différentes polices pour le titre et le texte
    const titleFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const textFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    // Ajoutez un titre personnalisé avec une boîte de fond colorée
    const titleBackgroundColor = rgb(0.1, 0.3, 0.6); // Ajustez au besoin
    page.drawRectangle({
        x: 50,
        y: height - 60,
        width: width - 100,
        height: 40,
        color: titleBackgroundColor,
    });
    page.drawText('Menu Details', {
        x: 110,
        y: height - 50,
        font: titleFont,
        color: rgb(1, 1, 1), // Ajustez la couleur du texte pour qu'il soit visible sur l'arrière-plan
        size: 18,
    });

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
        color: rgb(0.95, 0.95, 0.95), // Ajustez au besoin
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


