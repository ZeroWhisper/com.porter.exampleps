import React from 'react';
import * as Redux from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

import { Creators as TokenCreators } from '~/store/ducks/token';

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Sorry from '~/pages/Sorry';
import Details from '~/pages/Details';
// import Loading from '~/pages/Loading';

const Stack = createStackNavigator();

function Routes() {
  // const dispatch = Redux.useDispatch();

  // const { loading } = Redux.useSelector(state => state.token);

  // React.useEffect(() => {
  //   dispatch(TokenCreators.tokenRequest());
  // }, []);

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'Sorry'} component={Sorry} />
      <Stack.Screen name={'Details'} component={Details} />
    </Stack.Navigator>
  );
}

export default Routes;
