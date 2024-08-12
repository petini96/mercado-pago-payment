import { ShowPreapprovalPlanService } from './CreatePreapprovalPlanService';
import { CreatePreapprovalService } from './CreatePreapprovalService';
import { PreapprovalInput } from '../../dto/preapproval/PreapprovalInput';

function calculateEndDate(now: Date, frequencyType: string, frequency: number, repetitions: number) {
  let endDate = new Date(now);

  switch (frequencyType) {
    case 'days':
      endDate.setDate(now.getDate() + frequency * repetitions);
      break;
    case 'months':
      endDate.setMonth(now.getMonth() + frequency * repetitions);
      break;
    default:
      throw new Error(`Unsupported frequency type: ${frequencyType}`);
  }

  return endDate;
}

export const CreatePaymentService = async (body: any): Promise<any> => {
  console.log("payment request:");
  console.log(body);

  try {
    const preApprovalPlan = await ShowPreapprovalPlanService(body.plan.mercadoPagoPlanId);
    console.log("preApprovalPlan:");
    console.log(preApprovalPlan);

    const frequency = preApprovalPlan.auto_recurring.frequency;
    const frequencyType = preApprovalPlan.auto_recurring.frequency_type;

    const now = new Date();
    const endDate = calculateEndDate(now, frequencyType, frequency, 1)

    const preapprovalInput = {
      auto_recurring: {
        frequency: preApprovalPlan.auto_recurring.frequency,
        frequency_type: preApprovalPlan.auto_recurring.frequency_type,
        start_date: now.toISOString(),
        end_date: endDate.toISOString(),
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
 
    return {
      status: "success",
      message: "Preapproval created successfully",
      preapproval,
    };
  } catch (error) {
    console.error("Failed to create preapproval:", error);

    return {
      status: "error",
      message: "Failed to create preapproval",
      error,
    };
  }
};
