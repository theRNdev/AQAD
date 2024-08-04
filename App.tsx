import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { I18nextProvider } from "react-i18next";
import FlashMessage from "react-native-flash-message";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import i18n from "./src/I18n/i18n";
import Routes from "./src/Navigation/Routes";
import { persistor, store } from "./src/redux/store";

function App() {

  
  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
      <I18nextProvider i18n={i18n}>
        <SafeAreaProvider>
          <Routes />
          <FlashMessage
            titleStyle={{
              marginRight:5,
              fontSize:16,
            }}
            position="top"
          />
        </SafeAreaProvider>
      </I18nextProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
