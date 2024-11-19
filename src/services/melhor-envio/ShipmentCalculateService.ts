import axios, { AxiosRequestConfig } from "axios";
import { ShipmentCalculationRequest } from "../../dto/melhor-envio/ShipmentCalculateInput";

const bearerToken = process.env.MELHOR_ENVIO_TOKEN || ""
const melhorEnvioDomain = process.env.MELHOR_ENVIO_DOMAIN || ""
const melhorEnvioUserAgent = process.env.MELHOR_ENVIO_USER_AGENT || ""

export const ShipmentCalculate = async (shipmentCalculationRequest: ShipmentCalculationRequest): Promise<any> => {
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: `${melhorEnvioDomain}`,
    headers: {
      'Accept': '*/*',
      'Authorization': `${bearerToken}`,
      'Content-Type': 'application/json',
      'User-Agent': `${melhorEnvioUserAgent}`,
    },
    data: {
      from: {
        postal_code: '79092225',
      },
      to: {
        postal_code: '65066025',
      },
      package: {
        height: 4,
        width: 12,
        length: 17,
        weight: 0.3,
      },
    },
  };

  try {
    const response = await axios(config);
    console.log('Resposta:', response.data);
    return response
  } catch (error) {
    return error
  }
}; 
