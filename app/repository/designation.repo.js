const { database } = require('../config/PgConfig');

const createTableSql = `
CREATE SEQUENCE IF NOT EXISTS designation_id_seq;
CREATE TABLE IF NOT EXISTS designation( 
   id integer NOT NULL DEFAULT nextval('designation_id_seq') PRIMARY KEY,
   name text,createdAt TIMESTAMP DEFAULT now(),updatedAt TIMESTAMP DEFAULT now()
);
ALTER SEQUENCE designation_id_seq
OWNED BY designation.id;
`;

database.query(createTableSql);

exports.addDesig = ({ name }) => {
	return new Promise((resolv, reject) => {
		database
			.query('INSERT INTO designation(name) VALUES($1) RETURNING id', [name])
			.then(resolv)
			.catch(reject);
	});
};

exports.getAllDesig = () => {
	return new Promise((resolv, reject) => {
		database
			.query('SELECT * FROM designation')
			.then((res) => resolv(res))
			.catch((err) => reject(err));
	});
};

exports.deleteDesigById = (id) => {
	return new Promise((resolv, reject) => {
		database
			.query(`SELECT * FROM designation WHERE id = $1`, [id])
			.then((result) => {
				database
					.query(`DELETE FROM designation WHERE id = $1`, [id])
					.then((res) => resolv(result))
					.catch((err) => reject(err));
			})
			.catch((err) => reject(err));
	});
};

exports.updateDesigById = ({ id, name }) => {
	return new Promise((resolv, reject) => {
		database
			.query(
				`UPDATE public.designation SET name = $1, updatedAt = now() WHERE id = $2;`,
				[name, id]
			)
			.then((res) => {
				database
					.query(`SELECT * FROM designation WHERE id = $1`, [id])
					.then((result) => resolv(result))
					.catch((err) => reject(err));
			})
			.catch((err) => reject(err));
	});
};
