import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool ({
    host: 'localhost',
    user: 'postgres',
    password: 'marcos',
    database: 'likeme2',
    allowExitOnIdle: true
});

export{
    pool
}