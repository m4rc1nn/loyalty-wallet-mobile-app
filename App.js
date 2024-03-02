import 'react-native-gesture-handler';
import { useState } from 'react';
import MainComponent from './src/components/MainComponent';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

// Contexts
import AuthContextProvider from './src/contexts/AuthContext';
import UserDataContextProvider from './src/contexts/UserDataContext';
import UserCardsContextProvider from './src/contexts/UserCardsContext';

const LightTheme = {
  ...DefaultTheme,
  dark: false, // Ustawienie dla jasnego motywu
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff', // Jasne tło
    lighterBackground: '#f0f0f0', // Bardziej jasny kolor dla tła
    surface: '#ffffff', // Jasny kolor dla powierzchni, utrzymujący czystość i świeżość
    lighterSurface: '#dadce3',
    primary: '#007BFF', // Głęboki niebieski
    darkerPrimary: '#0265cf',
    secondary: '#D81B60', // Ciemny róż
    accent: '#00BFA5',  // Przykładowy kolor akcentu, dostosowany dla lepszej widoczności
    text: '#000000', // Kolor tekstu dla kontrastu z jasnym tłem
    onSurface: '#000000', // Kolor na powierzchniach, np. tekst na kartach, dla lepszego kontrastu
    disabled: '#c7c7c7', // Jasny kolor elementów nieaktywnych
    placeholder: '#747474', // Kolor tekstu placeholdera, ciemniejszy dla lepszej widoczności
    backdrop: '#ffffff', // Jasny kolor tła modalu, menu, itp., dla lekkiego efektu
    notification: '#ff80ab', // Kolor tła powiadomień, niezmieniony
    card: "#ffffff", // Jasny kolor kart
    border: "#e0e0e0", // Jasny kolor obramowania
  },
};


const DarkTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    background: '#1c1c1c', // Kolor tła
    lighterBackground: '#383737',
    surface: '#423e3e', // Lekko jaśniejszy kolor dla powierzchni, aby dodać głębi
    lighterSurface: '#5c5858',
    primary: '#007BFF', // Głęboki niebieski
    darkerPrimary: '#0265cf',
    secondary: '#D81B60', // Ciemny róż
    accent: '#00BFA5', // Przykładowy kolor akcentu, możesz dostosować
    text: '#ffffff', // Kolor tekstu dla kontrastu z ciemnym tłem
    onSurface: '#ffffff', // Kolor na powierzchniach, np. tekst na kartach
    disabled: '#f0e9e9', // Kolor elementów nieaktywnych
    placeholder: '#cccccc', // Kolor tekstu placeholdera
    backdrop: '#121212', // Kolor tła modalu, menu, itp.
    notification: '#ff80ab', // Kolor tła powiadomień
    card: "#1c1c1c",
    border: "000000",
  },
};



export default function App() {
  const [darkThemeEnabled, setDarkThemeEnables] = useState(true);

  return (
    <GestureHandlerRootView style={{ flex: 1}}>
      <UserDataContextProvider>
        <UserCardsContextProvider>
          <AuthContextProvider>
            <PaperProvider theme={darkThemeEnabled ? DarkTheme : LightTheme} >
              <MainComponent />
            </PaperProvider>
          </AuthContextProvider>
        </UserCardsContextProvider>
      </UserDataContextProvider>
    </GestureHandlerRootView>
  );
}
