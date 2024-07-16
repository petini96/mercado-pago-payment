import { PreApprovalPlan } from 'mercadopago';
import { mpClient } from '../../config/mercadoPago';
import { PreapprovalPlanInput } from '../../dto/preapproval-plan/PreapprovalPlanInput';
import { PreApprovalPlanGetData } from 'mercadopago/dist/clients/preApprovalPlan/get/types';
import { Options } from 'mercadopago/dist/types';
import PreapprovalPlan from '../../models/PreapprovalPlan';

const preApprovalPlan = new PreApprovalPlan(mpClient);

export const CreatePreapprovalPlanService = async (preapprovalPlanInput: PreapprovalPlanInput): Promise<any> => {
   const resultPreApprovalPlan = await preApprovalPlan.create({
      body: {
         back_url: preapprovalPlanInput.back_url,
         reason: preapprovalPlanInput.reason,
         auto_recurring: {
            currency_id: preapprovalPlanInput.auto_recurring.currency_id,
            transaction_amount: preapprovalPlanInput.auto_recurring.transaction_amount,
            frequency: preapprovalPlanInput.auto_recurring.frequency,
            frequency_type: preapprovalPlanInput.auto_recurring.frequency_type,
         }
      }
   });
   // const newPreapprovalPlan = PreapprovalPlan.build({
   //    name: preapprovalPlanInput.reason,
   //    description: "good plan",
   //    price: preapprovalPlanInput.auto_recurring.transaction_amount,
   // });
   // await newPreapprovalPlan.save()
   return resultPreApprovalPlan;
};

export const ShowPreapprovalPlanService = async (preApprovalPlanId: string): Promise<any> => {
   const options: Options = {
      timeout: 3000,
      idempotencyKey: "<idempotency-key>",
      plataformId: "<plataform-id>",
      integratorId: "<integrator-id>",
      corporationId: "<corporation-id>",
   }
   const response = preApprovalPlan.get({ preApprovalPlanId: preApprovalPlanId} as PreApprovalPlanGetData);
   return response;
};

// export const SearchPreapprovalPlanService = async (preApprovalPlanId: string, options: Options): Promise<any> => {
//    preApprovalPlan.get({ preApprovalPlanId: preApprovalPlanId, requestOptions: options } as PreApprovalPlanGetData);
// };