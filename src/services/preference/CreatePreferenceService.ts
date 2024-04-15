import {  Preference } from 'mercadopago';
import { Preference as PreferenceRequest } from '../../models/Preference';
import { mpClient } from '../../config/mercadoPago';
import { randomUUID } from 'crypto';

const CreatePreferenceService = async (preferenceRequest: PreferenceRequest): Promise<any> => {
   const preference = new Preference(mpClient);
   const response = await preference.create({
      body: {
         items: [
            {
               id: randomUUID(),
               title: 'Example Product',
               quantity: 1,
               unit_price: 25.80
            }
         ],
      }
   });

   return response["sandbox_init_point"];
};

export default CreatePreferenceService;