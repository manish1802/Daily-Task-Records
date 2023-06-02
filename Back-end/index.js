import express  from "express";
import cors from 'cors';
import router from "./router.js";
import multer from "multer";

 const app = express();
 app.use(cors())
 app.use(express.json())


 const storage = multer.diskStorage({
   destination: function (req, file, cb) {
     cb(null, "../Front-end/public/upload");
   },
   filename: function (req, file, cb) {
     cb(null, Date.now() + file.originalname);
   },
 });
 const upload = multer({ storage: storage });
 app.post("/api/upload", upload.single("file"), (req, res) => {
   const file = req.file;
   res.status(200).json(file.filename);
 });
 app.use("/api" , router)
 
app.listen(5000, () =>{
    console.log("connected to backend..")
 })