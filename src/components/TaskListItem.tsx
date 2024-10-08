import {View, Text, StyleSheet, Pressable} from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';


export default function TaskListItem({ task }) {

    return (
        <Link href={`/${task.id}`} asChild>
        <Pressable style={styles.container}>
            
            
                <Text style={styles.text}>{task.description}</Text>
            
            


           
            <AntDesign name="closecircle" size={16} color="gray" />
        </Pressable>
        </Link>

    );
}

const styles = StyleSheet.create({
    container: {backgroundColor: '#1D2125',
        padding: 15,
    borderRadius: 5,
    flexDirection:'row',
    justifyContent: 'space-between',

    },

    text:{color:'white',
        fontSize: 16,

    },
});