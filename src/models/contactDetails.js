import db from '../database.js';

class ContactDetailsStore {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    static async index() {
        let sql = 'SELECT * FROM contact_details;';

        return db.execute(sql);
    }

    static async show(id) {
        let sql = `SELECT * FROM contact_details WHERE id = ${id};`;

        return db.execute(sql);
    }

    async create() {
        let sql = `
        INSERT INTO contact_details(
            firstName,
            lastName,
            email,
            password
        )
        VALUES(
            '${this.firstName}',
            '${this.lastName}',
            '${this.email}',
            '${this.password}'
        )
        `;

        return db.execute(sql);
    }

    async update(id) {
        let sql = `
        UPDATE contact_details SET
            firstName = '${this.firstName}',
            lastName = '${this.lastName}',
            email = '${this.email}',
            password = '${this.password}'
        WHERE id = ${id};
        `;

        return db.execute(sql);
    }

    static async remove(id) {
        let sql = `DELETE FROM contact_details WHERE id = ${id};`;

        return db.execute(sql);
    }
}

export default ContactDetailsStore;
