import { Request, Response } from "express";
 
export const store = async (req: Request, res: Response): Promise<Response> => {
  const response = req.body;
  console.log(response);
  return res.status(200).json({ message: 'success to get hook', data: response });
};
