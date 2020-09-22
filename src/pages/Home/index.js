import React from 'react';
import * as Redux from 'react-redux';

import AppContainer from '~/components/AppContainer';
import Button from '~/components/Button';
import Text from '~/components/Text';
import { Creators } from '~/store/ducks/home';

import HomeBody from './HomeBody';

import * as S from './style';

function Home({ navigation }) {
  const dispatch = Redux.useDispatch();

  const { data, loading } = Redux.useSelector(state => state.home);

  React.useEffect(() => {
    dispatch(Creators.homeRequest());
  }, []);

  return (
    <AppContainer>
      <Text title>Incoming Movies</Text>
      <HomeBody data={data} loading={loading} />
      <S.Footer>
        <Button onPress={() => {}} isDisabled>
          Previous
        </Button>
        <Button onPress={() => {}}>Next</Button>
      </S.Footer>
    </AppContainer>
  );
}

export default Home;
