import express from 'express';
import fs from 'fs';
import path from 'path';
const router = express.Router();

router.get("/", (req, res) => {
    res.redirect("/hello-world");
});

router.get('/hello-world', (req, res) => {
    res.redirect("/hello-world.json");
});

router.get('/hello-world.json', (req, res) => {
    res.redirect("/hello-world.png");
});

router.get('/hello-world.AlHilal', (req, res) => {
   const Pathimg1 = 'C:/Users/Lenovo/Desktop/Hw-D2-W9/image.png'; 
   fs.readFile(Pathimg1, (err, img) => {  
        if (err) {
            res.status(500).send('Error reading image');
            return;
        }
        res.type('image/png');  
        res.send(img);  
   });
});

router.get('/hello-world.RealMadrid', (req, res) => {
    const Pathimg2 = 'C:/Users/Lenovo/Desktop/Hw-D2-W9/image-copy.png';  
    fs.readFile(Pathimg2, (err, secondImg) => {  
        if (err) {
            res.status(500).send('Error reading image');
            return;
        }
        res.type('image/png');  
        res.send(secondImg);  
    });
});

router.get('/hello-world.InterMilan', (req, res) => {
    const Pathimg3 = 'C:/Users/Lenovo/Desktop/Hw-D2-W9/image-enter.png';  
    fs.readFile(Pathimg3, (err, thirdimg) => {  
        if (err) {
            res.status(500).send('Error reading image');
            return;
        }
        res.type('image/png');  
        res.send(thirdimg);  
    });
});

export default router;
