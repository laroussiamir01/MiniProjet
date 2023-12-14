import { Reservations } from './../model/Reservations';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
import { Chambre } from '../model/Chambre';

@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  private url: String = 'http://localhost:8082/reservation';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/Json' }),
  };

  constructor(private http: HttpClient) {}
  getAllReservations() {
    return this.http.get('http://localhost:8082/reservation/allReservation');
  }
  addReservation(reservation: any) {
    return this.http.post(this.url + '/addReservation', reservation);
  }
  deleteReservation(reser: Reservations): Observable<Reservations> {
    return this.http.delete<Reservations>(
      'http://localhost:8082/reservation/deleteRes/' + reser.idReservation
    );
  }

  getReservationById(id: any): Observable<Reservations> {
    return this.http
      .get<Reservations>('http://localhost:8082/reservation/reservationbyId/' + id)
      .pipe(
        tap((data) => console.log('Réservation récupérée:', data)),
        catchError((error) => {
          console.error(
            'Erreur lors de la récupération de la réservation:',
            error
          );
          throw error; // Assurez-vous de renvoyer l'erreur pour qu'elle soit traitée par le composant
        })
      );
  }

  updateReservation(
    id: number,
    reservation: Partial<Reservations>
  ): Observable<Reservations> {
    console.log(
      'From Service updateReservation(' +
        id +
        ', ' +
        JSON.stringify(reservation) +
        ')'
    );
    return this.http.put<Reservations>(
      'http://localhost:8082/reservation/updateRes/' + id,
      reservation
    );
  }
  affecterReservationChambre(
    idReservation: Number,
    idChambre: number
  ): Observable<string> {
    return this.http.put<string>(
      this.url +
        '/affecterReservationAChambre/' +
        idReservation +
        '/' +
        idChambre,
      null
    );
  }

  desaffacterReservationChambre(idReservation: Number): Observable<string> {
    return this.http.put<string>(
      this.url + '/desaffecterReservationAChambre/' + idReservation,
      null
    );
  }
  countReservationsByChambre(idChambre: Number): Observable<number> {
    return this.http.get<number>(
      this.url + '/countReservationsByChambre/' + idChambre
    );
  }
  countValideReservations(): Observable<number> {
    return this.http.get<number>(this.url + '/count/valid');
  }
  countNonValideReservations(): Observable<number> {
    return this.http.get<number>(this.url + '/count/invalid');
  }

  updateDateById(id: any, datenv: any) {
    console.log(
      //id + datenv
      id,
      datenv
    );
    return this.http.patch(
      'http://localhost:8082/reservation/updateDateById/' + id,
      datenv
    );
  }

  getReservationsNonValides(): Observable<Reservations[]> {
    return this.http.get<Reservations[]>('http://localhost:8082/reservation/non-valide');
  }
  getReservationsValides(): Observable<Reservations[]> {
    return this.http.get<Reservations[]>('http://localhost:8082/reservation/valide');
  }
  approuverReservation(idReservation: number): Observable<any> {
    return this.http.put(
      'http://localhost:8082/reservation/approuver/' + idReservation,
      null
    );
  }
  getChambres(): Observable<any> {
    return this.http.get<Chambre[]>('http://localhost:8082/reservation/chambres');
  }
  reserverChambre(idChambre: number,idEt:any): Observable<any[]> {
    return this.http.post<any[]>(
      'http://localhost:8082/reservation/reserver/' + idChambre+'/'+idEt,
      null
    );
  }
  getAllChambreDoubleTripleClient(): Observable<any>{
    return this.http.get<Chambre[]>('http://localhost:8082/reservation/doubleAndTriple');
  }
}
