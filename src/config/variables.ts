import dotenv from 'dotenv'

dotenv.config()

export const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY || "AIzaSyB5H5mzxIyNrMrTcdJl6Q4cmRX_agxbPps"
export const GOOGLE_API_URL = process.env.GOOGLE_API_URL || "https://www.googleapis.com/books/v1/volumes"
// https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyB5H5mzxIyNrMrTcdJl6Q4cmRX_agxbPps