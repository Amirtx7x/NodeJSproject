import sql from 'mssql';

const config: sql.config = {
    user: 'amirsql147',
    password: 'amirpasssql',
    server: '127.0.0.1',
    database: 'FITNESS-PROJECT-V1',
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
