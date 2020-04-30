import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/49709096?s=460&u=3e10879d571ce2955f5624a76a79daf9ce243003&v=4"
            alt="Rocketseat"
          />
          <div>
            <strong>KevenJunco/microhard</strong>
            <p>Descrição do repositório</p>
          </div>
        </header>
        <div>
          <ul>
            <li>
              <strong>999</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>1999</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>18</strong>
              <span>issues abertas</span>
            </li>
          </ul>
        </div>
      </RepositoryInfo>

      <Issues>
        <Link key="repository.full_name" to={`/repositories}`}>
          <div>
            <strong>repository.full_name</strong>
            <p>repository.description</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
