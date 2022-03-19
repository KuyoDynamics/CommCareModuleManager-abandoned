import React, {useState} from 'react';
import {Pressable, Switch, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CardView from './card';

export default function AppModule({navigation, module}) {
  const [isEnabled, setIsEnabled] = useState(false);

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
            <Text>{name}</Text>
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
            <Text>{moduleFrequnecy}</Text>
          </Pressable>
        </CardView>
      </SafeAreaView>
    </>
  );
}
