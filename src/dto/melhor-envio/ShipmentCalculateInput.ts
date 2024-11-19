export type ShipmentCalculationRequest = {
  from: {
    postal_code: string; // CEP de origem
  };
  to: {
    postal_code: string; // CEP de destino
  };
  products: Array<{
    weight: number; // Peso do produto em kg
    width: number;  // Largura do produto em cm
    height: number; // Altura do produto em cm
    length: number; // Comprimento do produto em cm
    insurance_value: number; // Valor declarado em reais
    quantity: number; // Quantidade de itens iguais
  }>;
  services?: string[]; // Serviços específicos (opcional, ex: ["1", "2"])
  options?: {
    receipt?: boolean; // Aviso de recebimento
    own_hand?: boolean; // Mão própria
    collect?: boolean; // Coleta no local
  };
};
