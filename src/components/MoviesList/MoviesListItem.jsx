import { Link, useLocation } from 'react-router-dom';
import { Item } from './MoviesListItem.styled';
import img from 'img/img.png';
console.log('img:', img);

const BASE_URL = 'https://image.tmdb.org/t/p/w400';

export function MoviesListItem({ data: { id, poster_path, title } }) {
  const location = useLocation();
  
  return (
    <Item>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <div className="thumb">
          <img
            src={poster_path ? BASE_URL + poster_path : img}
            alt="poster"
          />
        </div>
        <h2>{title}</h2>
      </Link>
    </Item>
  );
}

