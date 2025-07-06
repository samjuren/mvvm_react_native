export async function fetchCep(cep: string) {
    try {
        const cleanedCep = cep.replace(/\D/g, '');
        const response = await fetch(`https://viacep.com.br/ws/${cleanedCep}/json/`);

        if (!response.ok) {
            throw new Error('Erro na conexão com a API.');
        }

        const data = await response.json();

        if ('erro' in data) {
            throw new Error('CEP não encontrado.');
        }

        return data;
    } 
    catch (error) {
        console.error('Erro ao buscar CEP:', error);
        throw error;
    }
}
