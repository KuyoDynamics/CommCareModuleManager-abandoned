import {Divider, ListItem, Badge, Chip} from '@react-native-elements/base';
import {useTheme} from '@react-native-elements/themed';
import React, {useState} from 'react';
import {Pressable, Switch, Text, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CardView from './card';

const styles = StyleSheet.create({});

export default function AppModule({navigation, module}) {
  const [isEnabled, setIsEnabled] = useState(false);
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
          <Pressable
            onPress={() =>
              navigation.navigate('AppModuleDetails', {
                name,
                id,
              })
            }>
            <ListItem>
              <ListItem.Content>
                <ListItem.Title>{name}</ListItem.Title>
                <ListItem.Subtitle>{caseType}</ListItem.Subtitle>
              </ListItem.Content>
              <Switch
                value={isEnabled}
                onValueChange={value => toggleSwitch()}
              />
            </ListItem>
            <Divider width={2} />
            <ListItem>
              <ListItem.Content>
                <View style={{flex: 1}}>
                  <Text>forms on</Text>
                  <Badge
                    status="success"
                    value={10}
                    // containerStyle={{position: 'absolute', top: 0, left: 10}}
                  />
                </View>
                <View style={{flex: 1}}>
                  <Text>forms off</Text>
                  <Badge
                    status="warning"
                    value={0}
                    // containerStyle={{position: 'absolute', top: 0, left: 10}}
                  />
                </View>
                <View style={{flex: 1}}>
                  <Text>frequency</Text>
                  <Chip
                    title={moduleFrequnecy}
                    icon={{
                      name: 'close',
                      type: 'font-awesome',
                      size: 20,
                      color: theme.colors.primary,
                    }}
                    onPress={() => console.log('Icon chip was pressed!')}
                    iconRight
                    type="outline"
                    containerStyle={{marginVertical: 15}}
                  />
                </View>
              </ListItem.Content>
            </ListItem>
            {/* <ListItem>
              <ListItem.Content>
                <ListItem.Title>Switch that please 😲</ListItem.Title>
              </ListItem.Content>
              <Switch
                value={isEnabled}
                onValueChange={value => toggleSwitch()}
              />
            </ListItem> */}
            {/* <Text>{name}</Text>
            <Text>{caseType}</Text>
            <Text>{moduleOn}</Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => toggleSwitch()}
              value={isEnabled}
            />

            <Text>{formCount}</Text>
            <Text>{totalFormsOn}</Text>
            <Text>{totalFormsOff}</Text>
            <Text>{moduleFrequnecy}</Text> */}
          </Pressable>
        </CardView>
      </SafeAreaView>
    </>
  );
}
