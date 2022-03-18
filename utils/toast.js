import {ToastAndroid} from 'react-native';

export default function Toast({visible, message}) {
  if (visible) {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
    return null;
  }
  return null;
}
