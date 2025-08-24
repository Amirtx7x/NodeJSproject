import sql from 'mssql';

const config: sql.config = {
    user: 'your_user',
    password: 'your_password',
    server: 'localhost',
    database: 'your_db',
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

export const connectToDB = async () => {
    try {
        await sql.connect(config);
        console.log('Connected to SQL Server');
    } catch (err) {
        console.error('DB connection failed:', err);
    }
};

export { sql };
