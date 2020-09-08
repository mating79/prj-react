import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({

  container: {
    backgroundColor: "white",
    width: "500px",
    margin: "160px auto",
    display: 'flex',
    flexDirection: 'column',
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: "20px",
    fontWeight: 600,
  },
  loginTitle:{
    width:"50%",
    fontFamily:"shabnam",
    fontWeight:600,
  },
  containerinpt:{
    padding:"16px 12px",
    display:"flex",
    flexDirection:'column',
  },
  btn:{
    fontFamily:"shabnam",
    fontWeight:600,
    fontSize:"16px",
    color: "#767676"
  }
})
export default useStyles;