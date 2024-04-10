import { Request, Response } from 'express';

class SQLQueryController {
  static executeQuery(req: Request, res: Response) {
    try {
      const { query } = req.body;
      res.status(200).json({ result: query });
    } catch (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

export default SQLQueryController;
