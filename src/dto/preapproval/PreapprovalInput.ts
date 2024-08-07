export interface PreapprovalInput {
  preapproval_plan_id: string;
  reason: string;
  external_reference: string;
  payer_email: string;
  card_token_id: string;
  auto_recurring: AutoRecurringInput;
  back_url: string;
  status: string;
}

export interface AutoRecurringInput {
  frequency: number;
  frequency_type: string;
  start_date: string;
  end_date: string;
  transaction_amount: number;
  currency_id: string;
}
