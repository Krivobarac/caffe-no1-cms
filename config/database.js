module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-18-215-96-22.compute-1.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'dc5k4annp8f9o'),
      user: env('DATABASE_USERNAME', 'gagqgceeqpdgfw'),
      password: env('DATABASE_PASSWORD', '2af021deeab2ddd8a0cc128f923acac1c072fad056b522c28d5b1df50424315b'),
      ssl: env.bool('DATABASE_SSL', false)
    },
  },
});
