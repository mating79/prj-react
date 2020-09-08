import {makeStyles} from "@material-ui/styles";
const useStyles = makeStyles({
root:{
    backgroundColor: '#fff',
    height:"100vh",
    width:'100%',
    display:'flex',
    overflow:'hidden',
},
rightsidebar :{
width:"18%",
},
mainpart :{
  flex:1,




},
leftsidebar :{
  width:"25% ",

},
divider :{
backgroundColor:"#5ea9dd !important",
filter:"opacity(0.7)" ,
height:"100% !important",
width:"1px !important",
},
content:{
  flex: 1,
  overflowY:"auto"
},

  });

  export default useStyles;