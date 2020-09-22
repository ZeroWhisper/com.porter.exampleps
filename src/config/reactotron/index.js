import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import sagaPlugin from "reactotron-redux-saga";

let reactotron = null;

if (__DEV__) {
  reactotron = Reactotron.configure()
    .useReactNative({})
    .use(reactotronRedux())
    .use(sagaPlugin({}))
    .connect();

  reactotron.clear();
  console.tron = reactotron;
} else {
  console.tron = console;
}

export default reactotron;
