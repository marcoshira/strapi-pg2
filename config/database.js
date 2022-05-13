module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-52-200-215-149.compute-1.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'd1hrk1kduf4jnf'),
      user: env('DATABASE_USERNAME', 'rculhqrqqigrrq'),
      password: env('DATABASE_PASSWORD', '2fae638851e5259d1af6ae8d403dc1f44f9aeb8430ce6ce553a975073737c906'),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
  },
});
