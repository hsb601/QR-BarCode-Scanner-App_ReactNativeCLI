import React, { useState, useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
  ScrollView,
  Image,
  Modal,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { ImageBackground } from 'react-native';
import Clipboard from '@react-native-community/clipboard';


const Home = ({ navigation }) => {
  const [isScannerOpen, setScannerOpen] = useState(false);
  const [ScannerOpenTxt, setScannerOpenTxt] = useState('Open Scanner 📷');
  const [scannedData, setScannedData] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

   const toggleScanner = () => {
    setScannerOpen(!isScannerOpen);
    setScannerOpenTxt(isScannerOpen ? 'Open Scanner 📷' : 'Close Scanner 📷');
  };

  const handleSuccess = (data) => {
    setScannedData(data);
    setModalVisible(true);
  };
   const copyToClipboard = () => {
      if (scannedData) {
        Clipboard.setString(scannedData);
        alert('Scanned data copied to clipboard');
      }
    };

  const QRScanner = ({ isScannerOpen, setScannerOpen, onSuccessCallback }) => {
    const [isFlashOn, setFlashOn] = useState(false);
    const [FlashOnTxt, setFlashOnTxt] = useState('ON/OFF 🔦');

    const closeScanner = () => {
      setScannerOpen(false);
    };

    const toggleFlash = () => {
      setFlashOn(!isFlashOn);
      setFlashOnTxt(isFlashOn ? 'On 🔦' : 'Off 🔦');
    };

    const onSuccess = (e) => {
      if (e.type === 'QR_CODE') {
        Linking.openURL(e.data).catch((err) =>
          alert('Invalid QR Code or No QR found (Timeout)\nYou can see error also ' + err)
        );
           setScannerOpenTxt('Open Scanner 📷');
      } else {
        onSuccessCallback(e.data);
        setScannerOpenTxt('Open Scanner 📷')
      }
      closeScanner(); // Close the scanner after a successful scan
    };

    return (
      <View>
        {isScannerOpen && (
          <QRCodeScanner
            onRead={onSuccess}
            flashMode={isFlashOn ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
            cameraStyle={styles.cameraStyle}
            topContent={
              <ImageBackground style={styles.cover} source={require('../assets/cover.png')}>
                <StatusBar barStyle={'light-content'} />
              </ImageBackground>
            }
            bottomContent={
              <View style={styles.flashButtonContainer}>
                <TouchableOpacity style={styles.flashButton} onPress={toggleFlash}>
                  <Text style={styles.flashButtonText}>{FlashOnTxt}</Text>
                </TouchableOpacity>
                <View>
                  <Text style={styles.sectionTitle}>QR and Bar Code Scanner</Text>
                </View>
              </View>
            }
          />
        )}
      </View>
    );
  };


  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.toggleContainer}>
          {isScannerOpen && (
            <QRScanner
              isScannerOpen={isScannerOpen}
              setScannerOpen={setScannerOpen}
              onSuccessCallback={handleSuccess}
            />
          )}
          <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={toggleScanner}>
              <Text style={styles.btnTxt}>{ScannerOpenTxt}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Image style={styles.cover2} source={require('../assets/cover.png')}></Image>

       <Modal
              visible={modalVisible}
              transparent={true}
              animationType="slide"
              onRequestClose={() => setModalVisible(false)}
            >
              <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Scanned Barcode</Text>
                <Text style={styles.modalContent}>{scannedData}</Text>
                <TouchableOpacity
                  style={styles.modalCloseButton}
                  onPress={() => {
                    setModalVisible(false);
                    setScannedData('');
                    setScannerOpenTxt('Close Scanner 📷');
                  }}
                >
                  <Text style={styles.modalCloseButtonText}>Close</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.copyButton}
                  onPress={copyToClipboard}
                >
                  <Text style={styles.modalCloseButtonText}>Copy</Text>
                </TouchableOpacity>
              </View>
            </Modal>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',

  },
  modalTitle: {
    fontSize: 20,
    color: 'darkorange',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalContent: {
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
  },
  modalCloseButton: {
    backgroundColor: 'darkorange',
    padding: 10,
    borderRadius: 10,
  },
  copyButtonText: {
     backgroundColor: 'darkorange',
      padding: 5,
      borderRadius: 10,
      marginTop: 20,

},
 modalCloseButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  toggleContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',


    },
  uri: {
    paddingBottom: 8,
    paddingHorizontal: 18,
  },
   btnTxt: {
      paddingHorizontal: 10,
      paddingVertical: 10,
      justifyContent: 'center',
      alignItems:'center',
      fontSize: 16,
      color: 'white',
      fontWeight: 'bold',
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 50,
      color: 'darkorange',
    },
    btn:{
    backgroundColor: 'darkorange',
     borderRadius: 10,
    borderRadius: 20,
    marginBottom: 52,
      marginTop: 10,

    },
    sectionDescription: {
      marginTop: 5,
      marginBottom: 5,
   marginHorizontal: 20,
      fontSize: 18,
      fontWeight: '400',
    color: '#460F07',

    },
    highlight: {
      fontWeight: '700',
    },

         cover: {
                 width:360,
                 height:360,
                 alignSelf: 'center',
                 display: 'flex-start',
                 alignItems: 'center',
                 justifyContent: 'center',
                   shadowColor: '#000',
                     shadowOffset: {
                       width: 0,
                       height: 1,
                     },
                     shadowOpacity: 0.2,
                     shadowRadius: 1.41,
                     elevation: 2,
                        marginTop: -0,
                        marginBottom: -46,
          },
cover2: {

                 alignSelf: 'center',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                   shadowColor: '#000',
                     shadowOffset: {
                       width: 0,
                       height: 1,
                     },
                     shadowOpacity: 0.2,
                     shadowRadius: 1.41,
                     width: 350,
                     height: 420,
                     marginLeft: 15,

          },


  centerText: {
    color: 'white',
  },
   cameraContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'darkorange',
      borderWidth: 2,

    },
    cameraStyle: {
      width: 300,
      height: 100,
      borderColor: 'darkorange',
      borderWidth: 5,
       flex: 2,
       marginHorizontal: 30,
       marginBottom: 30,
    },
  textBold: {
    fontWeight: '500',
    color: 'black',
  },
  flashButtonContainer: {
    alignItems: 'center',
    marginBottom: 5,
  },
  flashButton: {
    backgroundColor: 'darkorange',
    padding: 10,
    margin: 10,
    borderRadius: 50,
  },
  flashButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

   centerText: {
      flex: 1,
      fontSize: 18,
      padding: 32,
      color: '#777'
    },
    textBold: {
      fontWeight: '500',
      color: '#000'
    },
    buttonText: {
      fontSize: 21,
      color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
      padding: 16
    }
});

export default Home;
