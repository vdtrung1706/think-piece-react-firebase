import React, { useContext } from 'react';
import { UserContext } from '../providers/UserProviders';

import CurrentUser from './CurrentUser';
import SignInAndSignUp from './SignInAndSignUp';

const Authentication = ({ loading }) => {
  if (loading) return null;

  const user = useContext(UserContext);

  return <div>{user ? <CurrentUser {...user} /> : <SignInAndSignUp />}</div>;
};

export default Authentication;
