const Product = require('../models/Product');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

module.exports = async (req, res) => {
    upload.single('image')(req, res, async (err) => {
        try {
            if (err) {
                console.error(err);
                return res.status(500).send('เกิดข้อผิดพลาดในการอัปโหลดไฟล์รูป');
            }

            const { productname, numofheros, rank, winrate, golds, redgem, redmarble, coupon } = req.body;
            const productImage = req.file.buffer; 

            const imageBuffer = Buffer.from(productImage);

            const product = new Product({
                image: {
                    data: imageBuffer,
                    type: Blob 
                },
                productname,
                numofheros,
                rank,
                winrate,
                golds,
                redgem,
                redmarble,
                coupon
            });

            await product.save();
            res.status(200).send('อัปโหลดสินค้าและไฟล์รูปเรียบร้อยแล้ว');
        } catch (error) {
            console.error(error);
            res.status(500).send('เกิดข้อผิดพลาดในการอัปโหลดข้อมูล');
        }
    });
};
