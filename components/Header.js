import Link from 'next/link'

export default function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <h1>e-Learn</h1>

        <Link href="/cadastrar">
          <a className="button" title="">Cadastrar curso</a>
        </Link>
      </div>
    </header>
  );
}