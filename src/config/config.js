import moment from 'moment';
const UNIVERSAL = {

    // BASEURL :"https://sreexam.herokuapp.com/"
    BASEURL: "https://llogical-server.onrender.com/api/v1/",
    CONID : Math.random().toString(36).slice(2),
    TIMESTAMP: moment().format("YYYY-MM-DD hh:mm:ss").toString()


};

export default UNIVERSAL;