import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const COLORS = {primary: '#0E4944', white: '#fff', secondary:"#9BD35A"};

const slides = [
  {
    id: '1',
    image: require('../images/image.png'),
    title: "Diffuser l'amour facilement",
    subtitle: "vous ne savez pas comment aider les gens, utilisez soutien.ga",
  },
  {
    id: '2',
    image: require('../images/image.png'),
    title: 'Institution de confiance',
    subtitle: "Notre institution est surveillée par l'autorité des services financiers",
  },
  {
    id: '3',
    image: require('../images/image.png'),
    title: 'Commencer à aider',
    subtitle: "votre applications de recolte & collecte de fonds de confiance en ligne",
  },
];

const Slide = ({item}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={item?.image}
        style={{height: '35%', width, resizeMode: 'contain'}}
      />
      <View>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};

const OnboardingScreen = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.white,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{marginBottom: 20}}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{height: 60, display:"flex", flexDirection:"row",backgroundColor : "#2A6548",borderRadius:10
        }}>
              <TouchableOpacity
                style={styles.btnLogin}
                onPress={() => navigation.replace('LoginScreen')}>
                <Text style={{fontWeight: 'bold', fontSize: 15, color:"white"}}>
                  Connexion
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnSignIn}
                onPress={() => navigation.replace('LoginScreen')}>
                <Text style={{fontWeight: 'bold', fontSize: 15, color:"white"}}>
                  Inscription
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flexDirection: 'row', justifyContent:"space-between"}}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btnSkip}
                onPress={skip}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: COLORS.white,
                  }}>
                  Passer
                </Text>
              </TouchableOpacity>
              <View style={{width: 15}} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: "white"
                  }}>
                  Suivant
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <StatusBar backgroundColor={COLORS.primary} />
      <View style={{height:"25%", alignItems:"center"}}>
        <Image
            source={require('../images/logo.png')}
            style={{height: 51, width:145}}
        />
      </View>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: height * 0.75}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: COLORS.white,
    fontSize: 13,
    marginTop: 10,
    maxWidth: '70%',
    textAlign: 'center',
    lineHeight: 23,
  },
  title: {
    color: "#DEDEDE",
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    height:38,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : COLORS.secondary,
    borderRadius : 18
  },
  btnLogin: {
    height:60,
    width: 168,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : COLORS.secondary,
    borderRadius : 10
  },
  btnSignIn : {
    height:60,
    width: 168,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : "#2A6548",
    borderRadius : 10
  },
  btnSkip : {
      height:38,
      width: 100,
      opacity : 0.5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor : "#376662",
      borderRadius : 18
  }
});
export default OnboardingScreen;