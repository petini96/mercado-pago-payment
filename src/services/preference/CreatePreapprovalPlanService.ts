import { PreApprovalPlan } from 'mercadopago';
import { mpClient } from '../../config/mercadoPago';
import { PreapprovalPlanInput } from '../../dto/preapproval-plan/PreapprovalPlanInput';
import { PreApprovalPlanGetData } from 'mercadopago/dist/clients/preApprovalPlan/get/types';
import { Options } from 'mercadopago/dist/types';
import { PreApprovalPlanResponse } from 'mercadopago/dist/clients/preApprovalPlan/commonTypes';

const preApprovalPlan = new PreApprovalPlan(mpClient);

export const CreatePreapprovalPlanService = async (preapprovalPlanInput: PreapprovalPlanInput): Promise<any> => {
   return await preApprovalPlan.create({
      body: {
         back_url: preapprovalPlanInput.back_url,
         reason: preapprovalPlanInput.reason,
         auto_recurring: {
            currency_id: preapprovalPlanInput.auto_recurring.currency_id,
            transaction_amount: preapprovalPlanInput.auto_recurring.transaction_amount,
            frequency: preapprovalPlanInput.auto_recurring.frequency,
            frequency_type: preapprovalPlanInput.auto_recurring.frequency_type,
            free_trial: {
               frequency: 1,
               frequency_type: 'months'
            }
         }
      }
   });
};

export const ShowPreapprovalPlanService = async (preApprovalPlanId: string): Promise<PreApprovalPlanResponse> => {
   const options: Options = {
      timeout: 3000,
      idempotencyKey: "<idempotency-key>",
      plataformId: "<plataform-id>",
      integratorId: "<integrator-id>",
      corporationId: "<corporation-id>",
   }
   return preApprovalPlan.get({ preApprovalPlanId: preApprovalPlanId} as PreApprovalPlanGetData);
};