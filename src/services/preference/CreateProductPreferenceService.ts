import {  Preference } from 'mercadopago';
import { Product } from '../../models/Product';
import { mpClient } from '../../config/mercadoPago';
import { randomUUID } from 'crypto';
import { findProductByID } from '../../repositories/ProductRepository';
import { ProductRequest } from '../../dto/ProductRequest';

const CreateProductPreferenceService = async (productRequest: ProductRequest): Promise<any> => {
   const product = await findProductByID(productRequest.id);
   if (product === null) {
      throw new Error("fail to find product in database");
   }

   if (product.id === undefined){
      throw new Error("this product doesn't have ID");
   }

   const preference = new Preference(mpClient);
   const response = await preference.create({
      body: {
         items: [
            {
               id: product.id.toString(),
               title: product.title,
               quantity: productRequest.quantity,
               unit_price: product.price
            }
         ],
      }
   });

   return response["sandbox_init_point"];
};

export default CreateProductPreferenceService;