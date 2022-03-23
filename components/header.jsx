import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Linking,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  Dialog,
  Divider,
  ListItem,
  Button,
  Header as HeaderRNE,
  HeaderProps,
  Icon,
} from '@react-native-elements/base';

const AppModuleHeader = props => {
  const [showOptionsDialog, setShowOptionsDialog] = useState(false);

  const OptionsMeu = () => {
    return (
      <Dialog
        isVisible={showOptionsDialog}
        onBackdropPress={() => setShowOptionsDialog(false)}>
        <Dialog.Title title="Options" />
        <Divider width={2} />
        <ListItem>
          <ListItem.Content>
            <Button
              title="Logout"
              icon={{
                name: 'ant-design',
                type: 'logout',
                size: 15,
                color: 'white',
              }}
              iconRight
              iconContainerStyle={{marginLeft: 10}}
              titleStyle={{fontWeight: '700'}}
              buttonStyle={{
                backgroundColor: 'rgba(199, 43, 98, 1)',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 30,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
          </ListItem.Content>
        </ListItem>
      </Dialog>
    );
  };

  return (
    <SafeAreaProvider>
      <HeaderRNE
        rightComponent={
          <View style={styles.headerRight}>
            <TouchableOpacity
              style={{marginLeft: 10}}
              onPress={() => setShowOptionsDialog(true)}>
              <Icon
                type="simple-line-icon"
                name="options-vertical"
                color="white"
              />
            </TouchableOpacity>
            <OptionsMeu />
          </View>
        }
        centerComponent={{text: 'Header', style: styles.heading}}
      />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#397af8',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AppModuleHeader;
