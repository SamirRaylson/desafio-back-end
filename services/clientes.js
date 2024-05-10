
import firebase from 'firebase/app';
import 'firebase/firestore';

import { firebaseConfig } from '../services/firebaseConfig';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export async function addClient(clientData) {
  try {
    const response = await db.collection('clients').add(clientData);
    console.log('Client added with ID: ', response.id);
    return response.id;
  } catch (error) {
    console.error('Error adding client: ', error);
    throw error;
  }
}

export async function getClients() {
  try {
    const response = await db.collection('clients').get();
    const clients = response.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return clients;
  } catch (error) {
    console.error('Error getting clients: ', error);
    throw error;
  }
}

export async function updateClient(clientId, newData) {
  try {
    await db.collection('clients').doc(clientId).set(newData, { merge: true });
    console.log('Client updated successfully');
  } catch (error) {
    console.error('Error updating client: ', error);
    throw error;
  }
}

export async function deleteClient(clientId) {
  try {
    await db.collection('clients').doc(clientId).delete();
    console.log('Client deleted successfully');
  } catch (error) {
    console.error('Error deleting client: ', error);
    throw error;
  }
}
