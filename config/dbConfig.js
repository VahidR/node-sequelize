module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '5S182vt2',
    DB: 'nodejs',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}