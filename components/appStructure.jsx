import React from 'react';
import {FlatList, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppModule from './appModule';

function ListHeader({title}) {
  return (
    <>
      <View>
        <Text>{title}</Text>
      </View>
    </>
  );
}

function getModules(app) {
  return app.modules.reduce((acc, val, index) => {
    const module = {
      formCount: val.forms.length,
      totalFormsOn: 0,
      totalFormsOff: 0,
      moduleOn: false,
      moduleFrequnecy: 'monthly',
      name: `module-${index}`,
      caseType: val.case_type,
      id: val.unique_id,
    };
    return [...acc, module];
  }, []);
}

export default function AppStructure({navigation, app}) {
  const data = getModules(app);
  console.log('Modules in AppStructure', data);

  const renderItem = ({item}) => (
    <AppModule module={item} navigation={navigation} />
  );

  if (!app) {
    return (
      <>
        <Text>No App Found</Text>
      </>
    );
  }
  return (
    <>
      <SafeAreaView>
        <Text>App Structure</Text>

        <FlatList
          ListHeaderComponent={<ListHeader title={app.name} />}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </>
  );
}
