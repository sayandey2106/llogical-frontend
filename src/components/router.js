import React, {Component} from "react";
import { BrowserRouter as Router,  Route} from "react-router-dom";
import Hero from "./Hero/Hero";


class Routes extends Component {

    render() {
       
        let body;

        // if (login.isHome===true) 
        // if(!(sessionStorage.getItem('lp_auth_token')))
         {
            body =
                <div
                    style={{
                        display: "flex",
                    }}>
                    <main
                        style={{
                            flexGrow: 1
                        }}>
                        <Route exact path="/login" component={Hero} />
                        {/* <Route exact path="/" component={Login}/> */}
                      
                        {/* <Route path="/" component={StudentDashboardContainer}/> */}
                        {/* <Route exact path="/" component={QuestionCont}/> */}
                        {/* <Route path="/" component={ProfileCont}/> */}
                   
                        {/* <Route path="/survey" component={Survey} /> */}
                    </main>
                 
                </div>
        } 
        // else 
        //   {
        //         body =
        //         <div
        //             style={{
        //                 display: "",
        //             }}>
                  
        //             <main
        //                 style={{
        //                     flexGrow: 1,
        //                     marginTop: 10
        //                 }}>

        //                 {/* <Route exact path="/login" component={Login} /> */}
        //                 {/* <Route exact path="/login" component={Login} /> */}
        //                 {/* <Route path="/" component={Controller_con}/> */}
        //                 {/* ADMIN ROUTES */}
        //                 {/* <Route exact path="/dashboard" component={AdminDashboardCont}/> */}
        //                 {/* <Route exact path="/change-password" component={ChangePasswordCont}/>
        //                 <Route exact path="/forgot-password" component={ForgotCont}/> */}
        //                 {/* <Route exact path="/" component={Users}/> */}
        //                 {/* <Route exact path="/" component={HomeCont}/>
        //                 <Route exact path="/Shop" component={ShopAndWarehouse}/> */}
        //                 {/* <Route exact path="/signup" component={SignupCont}/> */}
        //                 {/* <Route exact path="/products" component={Products}/> 
        //                 <Route exact path="/login" component={Login}/>
        //                 <Route exact path='/log' component={LogTable}/>                        <Route path="/" component={Controller_con}/> */}

        //                 {/* <Route exact path="/lead" component={Lead}/> */}
        //                 {/* <Route exact path="/addlead" component={AddLead}/> */}
        //             </main>
        //             {/* <Footer /> */}
        //         </div>
        //     } 


            
            
        

        return (
            <Router>
                {body}
            </Router>
        );
    }
}

export default (Routes);
