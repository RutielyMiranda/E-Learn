import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Cadastrar() {
  const router = useRouter()

  const [nome, setNome] = useState('')
  const [inicio, setInicio] = useState('')
  const [fim, setFim] = useState('')
  const [duracao, setDuracao] = useState('')
  const [descricao, setDescricao] = useState('')

  function pegarDadosFormulario(event) {
    event.preventDefault()

    const curso = {
      nome,
      inicio,
      fim,
      duracao,
      descricao
    }

    const cursosCadastrados = localStorage.getItem('cursos')
    
    if(cursosCadastrados) {
      const cursosCadastrosObjeto = JSON.parse(cursosCadastrados)

      localStorage.setItem('cursos', JSON.stringify([...cursosCadastrosObjeto, curso]))
    } else {
      localStorage.setItem('cursos', JSON.stringify([curso]))
    }

    router.push('/')
  }

  return (
    <div class="main-cadastro">
      <h1 className="title">Cadastro de curso</h1>

      <form onSubmit={pegarDadosFormulario}>
        <div className="form-block">
          <label htmlFor="nome">Nome do curso</label>
          <input id="nome" placeholder="" value={nome} onChange={e => setNome(e.target.value)} />
        </div>
        <div className="form-block">
          <label htmlFor="duracao">Duração</label>
          <input id="duracao" type="number" value={duracao} placeholder="Duração em minutos" onChange={e => setDuracao(e.target.value)} />
        </div>
        <div className="form-block">
          <label htmlFor="inicio">Data de início</label>
          <input id="inicio" type="date" value={inicio} onChange={e => setInicio(e.target.value)} />
        </div>
        <div className="form-block">
          <label htmlFor="fim">Data de fim</label>
          <input id="fim" type="date" value={fim} onChange={e => setFim(e.target.value)} />
        </div>
        <div className="form-block">
          <label htmlFor="descricao">Descrição</label>
          <textarea rows="5" id="descricao" value={descricao} onChange={e => setDescricao(e.target.value)}></textarea>
        </div>

        <div className="form-buttons">
          <button className="button" type="submit">Cadastrar</button>

          <Link href="/">
            <a className="button secondary">Cancelar</a>
          </Link>
        </div>
      </form>
    </div>
  )
}
