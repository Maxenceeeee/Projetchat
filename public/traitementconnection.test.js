const mysql = require('mysql');

jest.mock('mysql');

describe('Tester la connexion à la base de données MySQL', () => {
 afterEach(() => {
    jest.clearAllMocks();
 });

 test('Connexion réussie', () => {
    mysql.createConnection.mockImplementation(() => {
      const connectMock = jest.fn((callback) => {
        callback(null);
      });

      return { connect: connectMock };
    });

 });

 test('Erreur de connexion', () => {
    mysql.createConnection.mockImplementation(() => {
      const connectMock = jest.fn((callback) => {
        callback(new Error('Erreur de connexion'));
      });

      return { connect: connectMock };
    });

 });
});