import express  from "express";
import db from "./db.js";

 const router = express.Router()

            /// GET ///
 router.get("/notes" , async (req,res) => {
    const q = "SELECT * FROM notes"
    try {
        const [data] = await db.query(q)
        if(data) return res.json(data)
    } catch (error) {
        return res.json(error);
    }
})
 
router.get("/notes/:id" , async(req,res) =>{
    const q = "SELECT * FROM notes WHERE id = ?"
    const id = req.params.id
    try {
        const [data] = await db.query(q,[id])
        if(data) return res.json(data)
    } catch (error) {
        return res.json(error)
    }
})
             /// POST ///

 router.post("/notes" , async (req,res) => {
    const q = "INSERT INTO notes (`id`, `title`, `description`,`img`) Values(default,?,?,?)"
    try {
        const [data] = await db.query(q ,[req.body.title,req.body.description,req.body.img])
       
        if(data) return res.json(data)
    } catch (error) {
        return res.json(error);
    }
   
 })
         ///     DELETE     ///

 router.delete("/notes/:id" , async (req,res) => {
    const q = "DELETE FROM notes WHERE id = ?"
    try {
        const notesid = req.params.id;
        const [data] = await db.query(q ,[notesid])
       if(data) return res.json("delete successfully")
    } catch (error) {
        return res.json(error);
    }
})

router.put("/notes/:id" , async(req,res) =>{
    const q = "UPDATE notes SET `title` = ?, description = ? WHERE id = ? "
    const notesid = req.params.id
    try {
          const Values = [req.body.title ,req.body.description]
      const [data]  =  await db.query(q,[...Values,notesid])
       if(data) return res.json("successfully")
    } catch (error) {
        return res.json(error)
    }
})

export default router;