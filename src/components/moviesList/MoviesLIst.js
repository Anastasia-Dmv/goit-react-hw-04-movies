import React from 'react';
import { Link, withRouter } from 'react-router-dom';
//import routes from '../../routes';
//import MoviesDetails from '../movieDetailsPage/MovieDetailsPage';
//import './MoviesList.scss';

const MoviesList = ({ movies, location, match }) => {
  return (
    <ul className="MoviesLIst">
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link
            to={{
              pathname: `/movies/:${id}`,
              state: { from: location },
              params: id,
            }}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default withRouter(MoviesList);

/* <Link to={{ pathname: `/movies/:${id}`, state: { from: location } }}>
{title}
</Link> */

//  <Link to={`/movies/:${id}`}>{title}</Link>
