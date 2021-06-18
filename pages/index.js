import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const [busca, setBusca] = useState('')
  const [lista, setLista] = useState([])
  const [listaBusca, setListaBusca] = useState([])

  useEffect(() => {
    const cursosCadastrados = localStorage.getItem('cursos')

    if(cursosCadastrados) {
      setLista(JSON.parse(cursosCadastrados))
    }
  }, [])

  function buscarCurso(event) {
    setBusca(event.target.value)

    const cursosFiltrados = lista.filter(curso => {
      if(curso.nome.toLowerCase().includes(event.target.value.toLowerCase())) {
        return true
      }

      return false
    })

    setListaBusca(cursosFiltrados);
  }

  return (
    <div className="main-cursos">  
      <h1 className="title">Lista de cursos</h1>

      <form>
        <input placeholder="Procure por um curso, ex: Sistema" value={busca} onChange={buscarCurso} />
      </form>

      {busca.length === 0 ? (
        <div className="listagem">
          {lista.length === 0 ? (
            <p>
              Você não cadastrou nenhum curso.{' '}
              <Link href="/cadastrar">
                Cadastrar um curso!
              </Link>
            </p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Duração</th>
                  <th>Data Ínicio</th>
                  <th>Data Fim</th>
                  <th>Descrição</th>
                </tr>
              </thead>
              <tbody>
                {lista.map(curso => (
                  <tr key={curso.id}>
                    <td>{curso.nome}</td>
                    <td>{curso.duracao}</td>
                    <td>{curso.inicio}</td>
                    <td>{curso.fim}</td>
                    <td>{curso.descricao}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      ) : (
        <div className="listagem">
          {listaBusca.length === 0 ? (
            <p>
              Nenhum curso encontrado com: {busca}
            </p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Duração</th>
                  <th>Data Ínicio</th>
                  <th>Data Fim</th>
                  <th>Descrição</th>
                </tr>
              </thead>
              <tbody>
                {listaBusca.map(curso => (
                  <tr key={curso.id}>
                    <td>{curso.nome}</td>
                    <td>{curso.duracao}</td>
                    <td>{curso.inicio}</td>
                    <td>{curso.fim}</td>
                    <td>{curso.descricao}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
      
    </div>
  )
}
