import { Request, Response } from "express";
import { ShipmentCalculationRequest } from "../dto/melhor-envio/ShipmentCalculateInput";
import { ShipmentCalculate } from "../services/melhor-envio/ShipmentCalculateService";

export const store = async (req: Request, res: Response): Promise<Response> => {
  const shipmentCalculationRequest: ShipmentCalculationRequest = req.body;
  try {
    const data = await ShipmentCalculate(shipmentCalculationRequest);
    return res.status(201).json({ message: 'success to calculate shipment', data: data });
  } catch (error) {
    return res.status(400).json({ message: 'fail to calculate shipment', error: error });
  }
};
