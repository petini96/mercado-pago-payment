import { PreapprovalPlanInput } from "../dto/preapproval-plan/PreapprovalPlanInput";
import { PreapprovalPlanOutput } from "../dto/preapproval-plan/PreapprovalPlanOutput";

const preapprovalPlanInMemory: PreapprovalPlanInput[] = [
    {
        auto_recurring: {
          frequency: 1,
          frequency_type: 'months',
          repetitions: 12,
          billing_day: 10,
          billing_day_proportional: false,
          transaction_amount: 10,
          currency_id: 'ARS'
        },
        back_url: 'https://www.yoursite.com',
        payment_methods_allowed: {
          payment_types: [
            { id: 'credit_card' }
          ],
          payment_methods: [
            { id: 'bolbradesco' }
          ]
        },
        reason: 'Yoga classes'
      }
];

// export const findPreapprovalPlanRepository = async (id: number): Promise<PreapprovalPlanOutput|null>  => {
//     const preapprovalPlan = preapprovalPlanInMemory.find(preapprovalPlan => preapprovalPlan.id === id);
//     return preapprovalPlan || null;
// };
