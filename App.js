import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginP from './src/componentes/screen/Login/LoginP';
import Logginp2 from './src/componentes/screen/Login/Logginp2';
import MenuPrincipal from './src/componentes/screen/Dash/MenuPrincipal';
import FromnuevoUser from './src/componentes/screen/Login/FromnuevoUser';
import { PaperProvider } from 'react-native-paper';
import Navegation from './src/componentes/Navegation';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/*<LoginP></LoginP>*/}
      {/*<Logginp2></Logginp2>*/}
      {/*<MenuPrincipal/>*/}
      <Navegation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
