export interface PreapprovalPlanInput {
  auto_recurring: {
    frequency: number;
    frequency_type: 'months' | 'days';
    repetitions: number;
    billing_day: number;
    billing_day_proportional: boolean;
    free_trial?: {
      frequency: number;
      frequency_type: 'months' | 'days';
    };
    transaction_amount: number;
    currency_id: string;
  };
  back_url: string;
  payment_methods_allowed: {
    payment_types: {
      id: string;
    }[];
    payment_methods: {
      id: string;
    }[];
  };
  reason: string;
}