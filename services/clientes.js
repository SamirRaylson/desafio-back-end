/**
 * Nome do arquivo: clientes.js
 * Data de criação: 09/05/2024
 * Autor: Samir Raylson
 * Matrícula: 01575824
 *
 * Descrição:
 * Este código define funções para interagir com uma coleção de clientes em um banco de dados Firestore do Firebase. As funções incluem 
 * adicionar um cliente, obter todos os clientes, atualizar um cliente existente e excluir um cliente. As operações são realizadas usando 
 * métodos fornecidos pela API do Firestore do Firebase.
 *
 * Este script é parte o curso de ADS.
 */

import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';

export const addClient = async (clientData) => {
  try {
    const docRef = await addDoc(collection(db, 'clients'), clientData);
    console.log('Client added with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding client: ', error);
    throw error;
  }
};

export const getClients = async () => {
  try {
    const clientsSnapshot = await getDocs(collection(db, 'clients'));
    const clients = clientsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return clients;
  } catch (error) {
    console.error('Error getting clients: ', error);
    throw error;
  }
};

export const updateClient = async (clientId, newData) => {
  try {
    const clientDocRef = doc(db, 'clients', clientId);
    await updateDoc(clientDocRef, newData);
    console.log('Client updated successfully');
  } catch (error) {
    console.error('Error updating client: ', error);
    throw error;
  }
};

export const deleteClient = async (clientId) => {
  try {
    const clientDocRef = doc(db, 'clients', clientId);
    await deleteDoc(clientDocRef);
    console.log('Client deleted successfully');
  } catch (error) {
    console.error('Error deleting client: ', error);
    throw error;
  }
};
