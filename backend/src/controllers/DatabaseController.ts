import { Request, Response } from 'express';

class DatabaseController {
  static fetchDataByType(req: Request, res: Response) {
    try {
      const { type } = req.params;
      res.status(200).json({ type, data: ['data1', 'data2', 'data3'] });
    } catch (error) {
      console.error('Error fetching database data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

export default DatabaseController;
