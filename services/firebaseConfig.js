/**
 * Nome do arquivo: firebaseConfig2024
 * Data de criação: 09/05/2024
 * Autor: Samir Raylson
 * Matrícula: 01575824
 *
 * Descrição:
 * Este código configura e inicializa uma conexão com o Firebase usando as credenciais fornecidas no firebaseConfig. Em seguida, 
 * obtém uma instância do Firestore para acessar o banco de dados. As configurações e instâncias são exportadas para serem usadas em outras
 * partes do aplicativo.
 *
 * Este script é parte o curso de ADS.
 */


import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD3DT27E92y6-PHFYXrfTm5w56FDMYLZYk",
  authDomain: "banco-84f40.firebaseapp.com",
  projectId: "banco-84f40",
  storageBucket: "banco-84f40.appspot.com",
  messagingSenderId: "429607346514",
  appId: "1:429607346514:web:a98d17cb4601c2249c9a8b"
};
 
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { firebaseApp, db };