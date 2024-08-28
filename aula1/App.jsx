import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Platform } from 'react-native';
import { useState, useRef } from 'react';
import Button from './components/buttons/Button';
import ImageViewer from './components/ImageViewer'; 
import * as ImagePicker from 'expo-image-picker';
import EmojiPicker from "./components/emoji/EmojiPicker";
import EmojiList from './components/emoji/EmojiList';
import EmojiSticker from './components/emoji/EmojiSticker';
import IconButton from './components/buttons/IconButton';
import CircleButton from './components/buttons/CircleButton';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Animated from 'react-native-reanimated';
import * as MediaLibrary from 'expo-media-library';
import domtoimage from 'dom-to-image';

const PlaceholderImage = require('./assets/background-image.jpg');

export default function App() {

  const imageRef = useRef();

  const [showAppOptions, setShowAppOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(null);

  const [status, requestPermission] = MediaLibrary.usePermissions();

  const pickImageAsync = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({

      allowsEditing: true,
      quality: 1,
    });

    if(!result.canceled) {

      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {

      alert('You did not select any image.');
    }
  };

  const onReset = () => {

    setShowAppOptions(false);
  };

  const onAddSticker = () => {

    setIsModalVisible(true);
  };

  const onSaveImageAsync = async () => {

    if(Platform.OS !== 'web') {

      try {

        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });
        await MediaLibrary.saveToLibraryAsync(localUri);

        if(localUri) {

          alert('Saved!');
        }
      } catch(e) {

        console.log(e);
      }
    } else {

      try {

        const dataUrl = await domtoimage.toJpeg(imageRef.current, {
          quality: 0.95,
          width: 320,
          height: 440,
        });
  
        let link = document.createElement('a');
        link.download = 'sticker-smash.jpeg';
        link.href = dataUrl;
        link.click();
      } catch(e) {

        console.log(e);
      }
    }
  };

  const onModalClose = () => {

    setIsModalVisible(false);
  };

  if(status === null) {

    requestPermission();
  }

  return (
    
    <GestureHandlerRootView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <View ref={imageRef} collapsable={false}>
            <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
            {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
          </View>
        </View>
        {showAppOptions ? (

          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <IconButton icon="refresh" label="Reset" onPress={onReset} />
              <CircleButton onPress={onAddSticker} />
              <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
            </View>
          </View>
        ) : (

          <View style={styles.footerContainer}>

            <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />

            <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />

          </View>
        )}
          <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
            <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
          </EmojiPicker>
        <StatusBar style="auto" />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
