import { PreApproval } from 'mercadopago';
import { mpClient } from '../../config/mercadoPago';
import { PreapprovalInput } from '../../dto/preapproval/PreapprovalInput';
import { PreApprovalResponse } from 'mercadopago/dist/clients/preApproval/commonTypes';

const preApproval = new PreApproval(mpClient);

export const CreatePreapprovalService = async (preapprovalInput: PreapprovalInput): Promise<PreApprovalResponse> => {
   return await preApproval.create(
      {
         body: {
            auto_recurring: preapprovalInput.auto_recurring,
            back_url: preapprovalInput.back_url,
            card_token_id: preapprovalInput.card_token_id,
            external_reference: preapprovalInput.external_reference,
            payer_email: preapprovalInput.payer_email,
            preapproval_plan_id: preapprovalInput.preapproval_plan_id,
            reason: preapprovalInput.reason,
            status: preapprovalInput.status
         }
      }
   )
};