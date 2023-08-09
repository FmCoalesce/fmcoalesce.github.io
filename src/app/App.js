// import React, { lazy ,Suspense} from "react";
import React, { Suspense,useEffect,useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";
import { logCredits } from "../utils/logCredits";
import  Navbar  from "../components/nav/Navbar"
import '../i18n.js'
// import { Home } from "../pages/Home";
// import Projects from "../pages/Projects/Projects";
import Main from "../Main";
import "bootstrap/dist/css/bootstrap.min.css";
// const Resume = lazy(() => new Promise((resolve, reject) => {
//     import('../pages/Resume')
//       .then(result => resolve(result.default ? result : { default: result }))
//       .catch(reject);
//   }));
export const App = () => {
    logCredits();
      const handleResize = () => {
        let flag = navigator.userAgent.match(
          /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      if (flag) {
        window.location.reload()
        }
      };
      useEffect(() => {
        // 监听
        window.addEventListener("resize", handleResize);
        // 销毁
        return () => window.removeEventListener("resize", handleResize);
      });
    return (
        <ThemeProvider>
            <CssBaseline />
            <Suspense fallback={<h2>Loading..</h2>}>
            <Router>
                <HelmetMeta />
                <Navbar/>
                <Main/>
            </Router>
            </Suspense>
        </ThemeProvider>
    );
};
