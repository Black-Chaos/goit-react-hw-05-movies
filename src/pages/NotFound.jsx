import { Button } from "components/Button/Button";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
    const navigate = useNavigate();
  return (
      <main style={{ textAlign: 'center', padding: '100px' }}>
          <Button text={'Go home'} handleClick={() => navigate('/')}/>
      <p><b style={{ fontSize: 64 }}>404</b></p>
      <p>Sorry, we couldn't find that page :(</p>
    </main>
  );
};
