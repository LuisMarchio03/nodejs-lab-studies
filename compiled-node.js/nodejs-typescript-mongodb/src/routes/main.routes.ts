import express from "express";
import Main from "../models/main";

const router = express.Router();

router.post("/", async (request, response) => {
  try {
    const main = request.body;
    const res = await new Main(main).save();
    response.json({ error: false, res });
  } catch (err) {
    response.json({ error: true, message: err.message });
  }
});

router.get("/", async (request, response) => {
  try {
    const main = await Main.find();
    response.json({ error: false, main });
  } catch (err) {
    response.json({ error: true, message: err.message });
  }
});

router.put("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const main = request.body;

    const res = await Main.findByIdAndUpdate(id, main);
    response.json({ error: false, res });
  } catch (err) {
    response.json({ error: true, message: err.message });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const id = request.params.id;

    await Main.findByIdAndDelete(id);
    response.json({ error: false });
  } catch (err) {
    response.json({ error: true, message: err.message });
  }
});

export default router;
