import React, { Component, createContext, useEffect, useState } from 'react';
import { auth, createUserProfileDocument } from '../firebase';

export const UserContext = createContext();

// class UserProvider extends Component {
//   state = {
//     user: null,
//   };

//   unsubscribeFromAuth = null;

//   componentDidMount = async () => {
//     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
//       const user = await createUserProfileDocument(userAuth);
//       this.setState({ user });
//     });
//   };

//   componentWillUnmount = () => {
//     this.unsubscribeFromAuth();
//   };
//   render() {
//     const { user } = this.state;
//     const { children } = this.props;

//     return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
//   }
// }

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  var unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async authUser => {
      const user = await createUserProfileDocument(authUser);
      setUser(user);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
