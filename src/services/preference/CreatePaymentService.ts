import { Payment } from 'mercadopago';
import { mpClient } from '../../config/mercadoPago';

export const CreatePaymentService = async (body: any): Promise<any> => {
  console.log("payment request:")
  console.log(body)
  const payment = new Payment(mpClient);
  try {
    const paymentCreated = await payment.create({ body: body })
    return paymentCreated
  } catch (error) {
    console.error(error)
    return error
  }
};
