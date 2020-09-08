import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({

  root: {
    width: "25%",
    padding: "20px 20px"

  },
  profile: {
    width: "max-content",
    direction: 'ltr',
  },
  aboutimage: {
    borderRadius: "50%",
    width: "max-content",
    marginRight: "8px"
  },
  profname: {
    flex: 1,
    fontSize: "18px"
  },
   profid: {
     flex: 1,
     color: "#898989",
     fontSize: "14px",
    
   },
  beststitle: {

    marginTop: "30px",
    background: "#f5f8fa",
    borderRadius: "20px",
    padding: "11px 24px"
  },
  bests: {
    fontSize: "18px",
    fontWeight: 600,
    marginBottom: "10px"
  },
  aboutimage2: {
    width: "50",
    marginBottom: "8px",
    marginTop: "8px"

  },
  profname2: {
    marginTop: "8px",
    marginBottom: "4px",
    marginRight: "8px",
    fontSize: "18px",
    fontWeight: 500,
  },
  profid2: {
    marginRight: "8px",
    color: "#898989",
    fontSize: "14px",
    direction: "rtl",
    textAlign:"right",
  },


});

export default useStyles;