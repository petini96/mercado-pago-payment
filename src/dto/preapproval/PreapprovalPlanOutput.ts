export interface PreapprovalOutput {
  id: string;
  application_id: number;
  collector_id: number;
  reason: string;
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
  payment_methods_allowed: {
    payment_types: {
      id: string;
    }[];
    payment_methods: {
      id: string;
    }[];
  };
  back_url: string;
  external_reference: number;
  init_point: string;
  date_created: string;
  last_modified: string;
  status: string;
}