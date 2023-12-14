import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../model/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  menuUrl: any = 'http://localhost:8082';
  constructor(private http: HttpClient) {}

  addMenu(menu: Menu): Observable<Menu> {
    return this.http.post<Menu>(`${this.menuUrl}/addMenu`, menu);
  }

  getMenu(id: number): Observable<Menu> {
    return this.http.get<Menu>(`${this.menuUrl}/getMenu/${id}`);
  }

  getAllMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>(`${this.menuUrl}/getMenus`);
  }

  getMenuById(idMenu: number): Observable<Menu> {
    return this.http.get<Menu>(this.menuUrl +'/getMenu/'+ idMenu);
  }

  updateMenu(idMenu: number, menu:Menu): Observable<Menu> {
    return this.http.put<Menu>(this.menuUrl+'/updateMenu/'+ idMenu, menu,this.httpOptions);
  }

  deleteMenu(id: number): Observable<void> {
    return this.http.delete<void>(`${this.menuUrl}/deleteMenu/${id}`);
  }
  affecterPlatToMenu(menuId: number, platId: number): Observable<any> {
    const url = `${this.menuUrl}/setPlatToMenu/${menuId}/${platId}`;
    return this.http.put(url, {});
  }
  desaffecterPlatFromMenu(idMenu: number, idPlat: number): Observable<any> {
    return this.http.put(`${this.menuUrl}/desaffecterMenu/${idMenu}/${idPlat}`, {});
  }

}
