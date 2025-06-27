import { useEffect, useState } from "react";
import api from "./services/api";

function App() {
  const [filmes, setFilmes] = useState([]);

  const getFilmes = async () => {
    try {
      const res = await api.get('/');
      const data = res.data;

      if (data.error) {
        console.log(data.message);
        return false;
      }

      setFilmes(data.response)
    } catch (err){
      console.log(err.message);
    }
  }
  
  useEffect(() => {
    getFilmes();
  }, []);

  // useEffect(() => {
  //   const article = { title: 'React Hooks POST Request Example' };
  //   axios.post('https://reqres.in/api/articles', article)
  //       .then(response => setArticleId(response.data.id));
  // }, []);

  return (
    <div className="App">
     <ul>
      {filmes.map(filme => (
          <li key={filme._id}>
            {filme.titulo}
          </li>
      ))}
     </ul>
    </div>
  );
}

export default App;
