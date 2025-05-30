import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({ providedIn: 'root' })
export class TicketService {
  constructor(private firestore: AngularFirestore) {}

  crearTicket(ticket: any) {
    return this.firestore.collection('tickets').add(ticket);
  }

  obtenerTickets() {
    return this.firestore.collection('tickets').valueChanges({ idField: 'id' });
  }
}