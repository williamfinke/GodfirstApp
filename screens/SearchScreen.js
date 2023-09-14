import { StyleSheet, ScrollView, TouchableOpacity, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonRedBig from '../components/ButtonRedBig';
import { useNavigation } from '@react-navigation/native';



const Search= () => {
  const navigation = useNavigation();

  return (

    <SafeAreaView style={styles.container}>
     
          <TouchableOpacity onPress={() => navigation.goBack()}><ButtonRedBig text='ZOEKEN' /></TouchableOpacity>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {

  },
  container2: {
    marginTop: 10,
  },
  image: {
    height: 180,
    width: 180,


  },
  inputWrapper: {
  },
  footer: {
    height: 100
  }
});


export default Search;