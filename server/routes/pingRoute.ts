// server/routes/pingRoute.ts
import express from 'express';

const router = express.Router();

// GET /ping
router.get('/ping', (_req, res) => {
  res.status(200).send('pong');
});

export default router;