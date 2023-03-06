import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()

const PORT = 5000 || process.env.PORT







app.get('/', (req: any,res: any) => {
    res.status(200).json({ success: true, message: "API WORKING" })
})






app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`)
})























