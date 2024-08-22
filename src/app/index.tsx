import { Stack } from 'expo-router';
import Taskboard from "../components/TaskBoard"

export default function HomeScreen() {

    return (
        <>
            <Stack.Screen  options={{ title: 'Tarefas' }} />
            <Taskboard/>
        </>
    );
}