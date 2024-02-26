import 'react-native-gesture-handler';
import AuthContextProvider from './src/contexts/AuthContext';
import UserDataContextProvider from './src/contexts/UserDataContext';
import MainComponent from './src/components/MainComponent';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <UserDataContextProvider>
        <AuthContextProvider>
            <MainComponent />
        </AuthContextProvider>
      </UserDataContextProvider>
    </PaperProvider>
  );
}
