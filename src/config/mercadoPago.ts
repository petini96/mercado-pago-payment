import { MercadoPagoConfig } from 'mercadopago';

export const mpClient = new MercadoPagoConfig(
    {
        accessToken: process.env.MP_ACCESS_TOKEN ? process.env.MP_ACCESS_TOKEN : ''
    }
);
