import 'react-native-gesture-handler';
import MainComponent from './src/components/MainComponent';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';

// Contexts
import AuthContextProvider from './src/contexts/AuthContext';
import UserDataContextProvider from './src/contexts/UserDataContext';
import UserCardsContextProvider from './src/contexts/UserCardsContext';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1}}>
      <PaperProvider>
        <UserDataContextProvider>
          <UserCardsContextProvider>
            <AuthContextProvider>
              <MainComponent />
            </AuthContextProvider>
          </UserCardsContextProvider>
        </UserDataContextProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}
