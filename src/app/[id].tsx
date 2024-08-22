import { View, Text } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';


const TaskDetails = () => {
    const { id } = useLocalSearchParams();
    return (
        <View style={{ padding: 10}}>
            <Stack.Screen options={{ title: 'detalhe das tarefas'}}/>
            <Text style={{color: 'white', fontSize: 20}}>Id: {id}</Text>
        </View>
    );
};

export default TaskDetails;