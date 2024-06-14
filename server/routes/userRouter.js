const router = require("express").Router();
const Multer = require("multer");

const { 
    uploadPlantProgressForm
 } = require("../controller/userController");

 const storage = new Multer.memoryStorage();
 const upload = Multer({
   storage,
 });

router.post("/upload-plant-progress-maintenance-form", upload.single("plant"), uploadPlantProgressForm);

 module.exports = router;