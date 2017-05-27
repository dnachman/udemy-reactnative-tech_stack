import React from 'react';
import { View, UIManager, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {

    // to enable animation on Android
    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    return (
        <Provider store={createStore(reducers)}>
            <View style={{ flex: 1 }}>
                <Header headerText="Tech Stack" />
                <LibraryList />
            </View>
        </Provider>
    );
};

export default App;
