
import { ListItem, ListItemText, IconButton} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';

export default function ToDoItem({item, itemRemover}) {

    return (<ListItem 
            divider
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => { itemRemover(item.id)}}>
                    <DeleteIcon  />
                </IconButton>
            }>
                <ListItemText>{item.text}</ListItemText>
            </ListItem>)
}