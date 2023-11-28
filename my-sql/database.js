import mysql from 'mysql2'

import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise() //instead of the old callback version

export async function getNotes() {
  const [rows] = await pool.query("SELECT * FROM notes")
  return rows
}
export async function getNote(id) {
  const [rows] = await pool.query(`
  SELECT * 
  FROM notes
  WHERE id = ?
  `, [id])
  return rows
}
export async function createNote(title, contents) {
  const [result] = await pool.query(`
  INSERT INTO notes (title, contents)
  VALUES (?, ?)
  `, [title, contents])
  const id = result.insertId
  return getNote(id)
}

// const notes = await getAllnotes()
// console.log(notes)

//Prepared statement ? [id]


// const note = await getNote(1)
// console.log(note)



// const result = await createNote('titleTest', 'contentTest')
// console.log(result)


// module.exports = {
//   getNote,
//   getAllnotes,
//   createNote
// }