const dbConfig = require ('../config/database');
import mysql from 'mysql2';

let connection = mysql.createConnection(dbConfig);

interface user {
    id?: number;
    user?: string;
    email?: string;
    password?: string;
    company?: string;
}

export default {
    async create(params: user) {
        let query = `
        INSERT INTO
        users
        (
        user,
        email,
        password,
        company
        VALUES
        'junior',
        'junior@junior.com',
        '1234',
        'teixeira corp'
        )`;
        connection.query(query, function (err, result, fields) {
            if (err) throw err;
            if (result) return result;
        })
    },

    async update(params: user) {
        
    },

    async list(params: user) {
        
    },

    async delete(req: Request, res: Response) {
        
    }

};