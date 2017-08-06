const express = require ('express');
const router = express.Router();
const DB_products = require('../Gallery/Gallery_Routes.js');
const app = express();

//create a new gallery 
router.route('/gallery')
.post((req,res) => {
	res.redirect('/galleries');
	Gallery.create({
		name: req.body.name,
		link: req.body.link,
		description: req.body.description
	})
	.then ((data) => {
		console.log(data);
		console.log('Create a new Gallery');
		res.end();
	})
	.catch((err) => {
		console.log(err);
	});
});

//get all the gallery photo
// .get('/', (req,res)=>{
// 	Gallery.findAll()
// 	.then(()=>{
// 		console.log();
// 		res.end();
// 	})
// 	.catch((err)=>{
// 		console.log(err);
// 	});
// });

module.exports = router;