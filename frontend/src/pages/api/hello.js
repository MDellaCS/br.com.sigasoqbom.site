import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.post('http://localhost:8080/alunos');
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocorreu um erro ao buscar os alunos' });
  }
}
