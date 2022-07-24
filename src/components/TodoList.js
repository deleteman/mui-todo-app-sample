import { Box, Paper, TextField, Button, Stack,List } from "@mui/material"
import { Container } from "@mui/system"
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import { useRef, useState } from "react";
import ToDoItem from "./ToDoItem";


export default function TodoList() {

    const [todos, setTodos] = useState([])
    const [taskError, setTaskError] = useState("")
    const inputRef = useRef(null)

    function removeTodo(id) {
        setTodos(todos.filter( t => t.id != id))
    }

    function addToDo(evt) {
        evt.preventDefault()
        
        if(inputRef.current.value.trim() == "") {
            return setTaskError("Can't create empty task")
        } else {
            setTaskError("")
        }

        setTodos([...todos, {
            text: inputRef.current.value,
            id: todos.length + 1
        }])
        inputRef.current.value = ""
    }

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} >
                <h1>MUI-based To-Do app</h1>
                <Container maxWidth="sm">
                    <Stack direction={"row"} spacing={2}>
                            <TextField 
                                inputRef={inputRef} 
                                id="standard-basic" 
                                label="New Task" 
                                variant="filled" 
                                fullWidth 
                                error={taskError.length != 0}
                                helperText={taskError}
                            />
                            <Button variant="contained"  onClick={addToDo} >
                                <SaveRoundedIcon /> 
                            </Button>
                    </Stack>
                    <List>
                        {todos && todos.map( t => <ToDoItem item={t} itemRemover={removeTodo} key={t.id}/>)} 
                    </List>
                    <Box>
                        <h2>Total pending tasks: {todos.length}</h2>
                    </Box>
                </Container>
            </Paper>
        </Container>
    )
}