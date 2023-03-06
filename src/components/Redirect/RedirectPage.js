import { useParams } from 'react-router-dom';
import apiUser from '../../services/apiUser';
import { Redirect } from 'react-router-dom';

const RedirectPage = () => {
  const { id } = useParams();
  const config = {
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000/',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Max-Age': '1800',
      'Access-Control-Allow-Headers': 'content-type',
      'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, PATCH, OPTIONS',
    },
  };

  apiUser
    .openLink(id, config)
    .then((res) => {
      console.log(res.request.responseURL);
    })
    .catch((err) => console.log(err));
};

export default RedirectPage;
