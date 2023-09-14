import { StyleSheet, ScrollView, TouchableOpacity, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TitleBig from '../components/TitleBig';
import TitleSmall from '../components/TitleSmall';
import ButtonRedBig from '../components/ButtonRedBig';
import VideoArtBig from '../components/VideoArtBig'
import VideoThumbnail from '../components/VideoThumbnail';
import { useNavigation } from '@react-navigation/native';



const Explore= () => {
  const navigation = useNavigation();

  return (

    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <TitleBig title='Explore' />
        <TitleSmall title='Is dit wat voor jou!' />
        <ScrollView showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false} horizontal={true}>
          <VideoArtBig />
          <VideoArtBig />
          <VideoArtBig />
          <VideoArtBig />
        </ScrollView>
        <TitleSmall title='Word geinspireerd' />
        <ScrollView showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false} style={styles.container2} horizontal={true}>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}><ButtonRedBig text='ZOEKEN' /></TouchableOpacity>
          <ButtonRedBig text='GELOOF' />
          <ButtonRedBig text='GENEZING' />
          <ButtonRedBig text='BEVRIJDING' />
        </ScrollView>
        <TitleSmall title='Nieuwste Videos' />
        <VideoThumbnail />
        <VideoThumbnail />
        <VideoThumbnail />
        <VideoThumbnail />
        <VideoThumbnail />
      </ScrollView>
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


export default Explore;