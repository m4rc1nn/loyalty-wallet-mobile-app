import 'react-native-gesture-handler';
import AuthContextProvider from './src/contexts/AuthContext';
import MainComponent from './src/components/MainComponent';

export default function App() {
  return (
    <AuthContextProvider>
      <MainComponent />
    </AuthContextProvider>
  );
}
