import {View, Text, FlatList, TextInput, Button, StyleSheet} from 'react-native'
import TaskListItem from './TaskListItem'; 
import { useState } from 'react';
import { setStatusBarBackgroundColor } from 'expo-status-bar';


export default function TaskList(){
    const [tasks, setTasks] = useState([
        { description: 'Primeira tarefa'},
        { description: 'Segunda tarefa'},
    ]);

    const [newTask, setNewTask] = useState('');

    const createTask = () => {
        console.warn('Create: ', newTask);
        setTasks ([...tasks, {description: newTask }]);

        setNewTask('');
    }

    return (
        <View style={styles.container}>

            <Text 
            style={styles.title}>Pendente</Text>

            {/* A lista de tarefas */}
            <FlatList 
                data={tasks} 
                contentContainerStyle={{ gap: 5 }}
                renderItem={({ item}) => <TaskListItem task={item} /> }
             />
        
        {/* nova entrada de tarefa*/}
        <TextInput
            value={newTask}
            onChangeText={setNewTask}
            placeholder="Nova tarefa"
            placeholderTextColor="gray"
            style={styles.Input} />

        <Button title="Adidionar tarefa" onPress={createTask}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        backgroundColor: '#101112', 
        padding: 10, 
        borderRadius: 10, 
        gap: 5 },

    title:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10,
        textAlign:'center'
    },
    Input: {
        color:'white',
        padding:10, 
        backgroundColor: '#1D2125',
        borderRadius:5},
    
    
})