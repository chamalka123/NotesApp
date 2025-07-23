import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AddNoteModal from "../components/AddNoteModal";
import NoteList from "../components/NoteList";

const NoteScreen = () => {

    const [notes, setNotes] = useState([
        { id: '1', text: 'Note one' },
        { id: '2', text: 'Note Two' },
        { id: '3', text: 'Note Three' },
    ]);
    const [modalVisible, setModalVisible] = useState(false);
    const [newNote, setNewNote] = useState('');

    //Add new note
    const addNote = () =>{
        if(newNote.trim() === '') return;

        setNotes((prevNotes) => [
            ...prevNotes,
            {id : Date.now.toString(), text: newNote}
        ]);

        setNewNote('');
        setModalVisible(false);
    }

    return (<View style={styles.container}>
      <NoteList notes={notes}/>

        <TouchableOpacity style={styles.addbutton} onPress={() => setModalVisible(true)}>
            <Text style={styles.addbuttonText}>+ Add Note</Text>
        </TouchableOpacity>

        {/*Modal*/}
<AddNoteModal modalVisible={modalVisible}
setModalVisible={setModalVisible}
newNote={newNote}
setNewNote={setNewNote}
addNote={addNote}/>
        

    </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    
    addbutton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center'
    },
    addbuttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    
})

export default NoteScreen;