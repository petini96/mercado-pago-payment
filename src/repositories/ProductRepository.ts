import { Product } from "../models/Product";

const productsInMemory: Product[] = [
    {
        id: 1,
        title: 'Plano Básico',
        description: 'Acesso ilimitado a cursos básicos.',
        price: 49.99
    },
    {
        id: 2,
        title: 'Plano Premium',
        description: 'Suporte premium incluído.',
        price: 99.99
    },
    {
        id: 3,
        title: 'Plano Profissional',
        description: 'Sessões de mentoria.',
        price: 149.99
    }
];

export const findProductByID = async (id: number): Promise<Product|null>  => {
    const product = productsInMemory.find(product => product.id === id);
    return product || null;
};
