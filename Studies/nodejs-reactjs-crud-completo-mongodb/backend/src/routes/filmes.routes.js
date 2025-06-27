const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const Filme = require('../models/filme');

router.get('/', async (req, res) => {
  try {
    const response = await Filme.find({});
    res.json({ error: false, response });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Filme.findById(id);
    res.json({ error: false, response })
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

router.post('/', async (req, res) =>  {
  try {
    const filme = req.body;
    const response = await new Filme(filme).save();
    res.json({ error: false, filme: response });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const filme = req.body;

    const response = await Filme.findByIdAndUpdate(id, filme);
    res.json({ error: false, response });

  } catch (err) {
    res.json({ error: true, message: err.message })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    
    await Filme.findByIdAndDelete(id);
    res.json({ error: false });

  } catch (err) {
    res.json({ error: true, message: err.message });
  }
})

module.exports = router;


