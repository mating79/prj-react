import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({

  root: {
    backgroundColor: "#e6e6e6",

  },


  header: {
    backgroundColor: "white",
    padding: "24px 20px",
    display: "flex !important",
  },
  headertitle: {
    marginRight: "8px",
    fontSize: "18px",
    fontWeight: 600,
  },
  divider: {
    backgroundColor: "#5ea9dd !important",
    filter: "opacity(0.2)",
    height: "1.5px !important",
  },
  newtweet: {
    backgroundColor: "white",
    padding: "18px",
    displaye: "flex",
    flexDirection: "column",
    marginBottom: "8px"
  },
  newtweetimg: {
    borderRadius: "50%",
    width: "max-content",

  },
  input: {
    marginRight: "16px",
    flex: 1,
    border: "none",
    "&:focus":
    {
      outline: 'unset',
    },
  },
  newTweetBtn: {
    fontFamily: "shabnam !important",
    color: "white !important",
    backgroundColor: "#5ea9dd !important",
    borderRadius: "2rem !important",
    minHeight: "30px !important",
    lineHeight: "1rem !important",
    minWidth: "7rem !important",
    fontWeight: 500
  },
  newtweetbtnimg: {
    border: "1px solid #929191",
    borderRadius: "50%",
    marginLeft: "8px",
    padding: "6px",

  },
  tweetlistimg: {
    borderRadius: "50%",
    height: "max-content",

  },
  tweetlistname: {
    padding: "8px 0px 8px 8px ",
    fontWeight: 600,
  },
  tweetlistid: {
    paddingTop: "12px",
    color: "#898989",
    fontSize: "14px"
  },
  tweetlisttext: {
    marginTop: "8px",
    fontSize: "0.9rem"
  },
  likecount: {
    fontSize: "12px",
    color: "#898989",
    marginLeft: "8px",
    marginTop:"10px"

  },









});

export default useStyles;