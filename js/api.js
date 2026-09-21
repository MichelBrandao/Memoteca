const api = {
  //estrutura do fetch: async + await = promisse
  async buscaPensamentos() {
    try {
      const response = await fetch("http://localhost:3000/pensamentos");
      return response.json();
    } catch {
      alert("Erro ao buscar pensamentos");
    }
  },
};

//habilita reutilização da função em outros arquivos
export default api;
