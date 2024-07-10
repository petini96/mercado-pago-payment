export type Identification = {
    type: string;
    number: string;
};

export type Payer = {
    email: string;
    identification: Identification;
};

export type RequestOptions = {
    idempotencyKey: string;
};

export type PaymentRequest = {
    transaction_amount: number;
    token: string;
    description: string;
    installments: number;
    paymentMethodId: string;
    issuer: string;
    payer: Payer;
    requestOptions: RequestOptions;
};
