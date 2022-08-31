import pg from 'pg'

const { Pool } = pg
export const connection = new Pool({
  connectionString: 'postgres://postgres:123@localhost:5432/valex'
})
