import { ShowPreapprovalPlanService } from './CreatePreapprovalPlanService';
import { CreatePreapprovalService } from './CreatePreapprovalService';
import { PreapprovalInput } from '../../dto/preapproval/PreapprovalInput';

export const CreatePaymentService = async (body: any): Promise<any> => {
  console.log("payment request:");
  console.log(body);

  try {
    // const preApprovalPlanID = "2c938084910f959d01913b516ea50dfe";
    const preApprovalPlan = await ShowPreapprovalPlanService(body.mercadoPagoPlanId);
    console.log("preApprovalPlan:");
    console.log(preApprovalPlan);

    const preapprovalInput = {
      auto_recurring: {
        frequency: 1,
        frequency_type: "months",
        start_date: "2020-06-02T13:07:14.260Z",
        end_date: "2029-07-20T15:59:52.581Z",
        transaction_amount: body.transaction_amount,
        currency_id: "BRL",
      },
      back_url: preApprovalPlan.back_url,
      card_token_id: body.token,
      external_reference: "4ef1db3d-e3a3-4991-8ec1-2957ec6616bc",
      payer_email: body.payer.email,
      preapproval_plan_id: preApprovalPlan.id,
      reason: preApprovalPlan.reason,
      status: "authorized",
    } as PreapprovalInput;

    console.log("preApprovalInput:");
    console.log(preapprovalInput);

    const preapproval = await CreatePreapprovalService(preapprovalInput);
    console.log("preapproval:");
    console.log(preapproval);

    // Retornar uma mensagem de sucesso
    return {
      status: "success",
      message: "Preapproval created successfully",
      preapproval,
    };
  } catch (error) {
    console.error("Failed to create preapproval:", error);

    // Retornar um erro em caso de falha
    return {
      status: "error",
      message: "Failed to create preapproval",
      error,
    };
  }
};
