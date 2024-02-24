import 'react-native-gesture-handler';
import AuthContextProvider from './src/contexts/AuthContext';
import UserDataContextProvider from './src/contexts/UserDataContext';
import MainComponent from './src/components/MainComponent';

export default function App() {
  return (
    <UserDataContextProvider>
      <AuthContextProvider>
          <MainComponent />
      </AuthContextProvider>
    </UserDataContextProvider>
  );
}
