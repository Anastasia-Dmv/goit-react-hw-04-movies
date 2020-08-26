import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../utils/routes';

export default function NotFoundView() {
  return (
    <section className="movieDetails">
      <h3>There is no such page</h3>
      <br />
      <Link to={{ pathname: routes.home }}>
        Here is the link to the homepage
      </Link>
    </section>
  );
}
