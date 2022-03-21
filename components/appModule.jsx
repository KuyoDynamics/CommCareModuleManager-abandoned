import {
  Divider,
  ListItem,
  Badge,
  Chip,
  Button,
} from '@react-native-elements/base';
import {useTheme, Icon, Slider} from '@react-native-elements/themed';
import React, {useState} from 'react';
import {Pressable, Switch, Text, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CardView from './card';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function AppModule({navigation, module}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [dataCollectionWindow, setDataCollectionWindow] = useState(5);
  const {theme} = useTheme();

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const {
    formCount,
    totalFormsOn,
    totalFormsOff,
    moduleOn,
    moduleFrequnecy,
    name,
    id,
    caseType,
  } = module;

  return (
    <>
      <SafeAreaView>
        <CardView>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>{name}</ListItem.Title>
              <ListItem.Subtitle>{caseType}</ListItem.Subtitle>
            </ListItem.Content>
            <Switch value={isEnabled} onValueChange={value => toggleSwitch()} />
          </ListItem>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}>
            <View style={{flex: 1}}>
              <Text style={{fontStyle: 'italic'}}>21/03/22</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontStyle: 'italic'}}>21/03/20</Text>
            </View>
            <View style={{flex: 3}}>
              <Text style={{fontStyle: 'italic'}}>chisomo.ngosi@crs.org</Text>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}>
            <View style={{flex: 1}}>
              <Text>Last ON</Text>
            </View>
            <View style={{flex: 1}}>
              <Text>Last OFF</Text>
            </View>
            <View style={{flex: 3}}>
              <Text>Last configured by</Text>
            </View>
          </View>

          <Divider width={2} />
          <ListItem>
            <ListItem.Content>
              <View style={{flex: 1, flexDirection: 'row', marginBottom: 12}}>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Text>forms on</Text>
                  <Badge status="success" value={10} />
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Text>forms off</Text>
                  <Badge status="warning" value={0} />
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={{flex: 1}}>Data collection frequency</Text>
                <Chip
                  style={{flex: 1}}
                  title={moduleFrequnecy}
                  icon={{
                    name: 'angle-down',
                    type: 'font-awesome',
                    size: 20,
                    color: theme.colors.primary,
                  }}
                  onPress={() => console.log('Icon chip was pressed!')}
                  iconRight
                  type="outline"
                />
              </View>
              <View style={{flex: 1, flexDirection: 'column', marginTop: 10}}>
                <Text>
                  Data collection window is{' '}
                  <Text style={{fontWeight: 'bold'}}>
                    {' '}
                    {dataCollectionWindow}{' '}
                  </Text>{' '}
                  days before monthend
                </Text>
                <Slider
                  value={dataCollectionWindow}
                  onValueChange={setDataCollectionWindow}
                  maximumValue={20}
                  minimumValue={0}
                  step={1}
                  allowTouchTrack
                  trackStyle={{height: 5, backgroundColor: 'transparent'}}
                  thumbStyle={{
                    height: 20,
                    width: 20,
                    backgroundColor: 'transparent',
                  }}
                  thumbProps={{
                    children: (
                      <Icon
                        name="calendar-check-o"
                        type="font-awesome"
                        size={10}
                        reverse
                        containerStyle={{bottom: 10, right: 10}}
                        color={theme.colors.secondary}
                      />
                    ),
                  }}
                />
              </View>
            </ListItem.Content>
          </ListItem>
          <View
            style={{
              flex: 1,
              // flexDirection: 'row',
              // justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Button
              title="Save"
              buttonStyle={{
                backgroundColor: 'black',
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 30,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              titleStyle={{fontWeight: 'bold'}}
            />
            <Button
              disabled
              title="View"
              buttonStyle={{
                backgroundColor: theme.colors.secondary,
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 30,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              titleStyle={{fontWeight: 'bold'}}
            />
          </View>
        </CardView>
      </SafeAreaView>
    </>
  );
}
