import express from 'express';
import stubAPI from './stupAPI';

const router = express.Router();

// get all items
router.get('/', (req, res) => {
  const items = stubAPI.getAll();
  res.send({items: items});
});


// Add a item
router.post('/', (req, res) => {
    const newItem = req.body;

    if (newItem && stubAPI.add(newItem.title, newItem.type, newItem.quantity)) {
         return res.status(201).send({message: 'Items Created'});
    }
    return res.status(400).send({message: 'Unable to find Item in request.'});
});

// get a item
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const item = stubAPI.getItem(id);

       if (item) {
               return res.status(200).send(item);
              }
              return res.status(404).send({message: `Unable to find Item ${id}`});
});

// increase an items quantity
router.post('/:id/increaseQuantity', (req, res) => {
    const id = req.params.id;
           if (stubAPI.increaseQuantity(id)) {
                return res.status(200).send({message: `Item ${id} Quantity Increased`});
           }
           return res.status(404).send({message: `Unable to find Item ${id}`});
});

export default router;