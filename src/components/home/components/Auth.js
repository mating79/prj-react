import React, { useState } from 'react';
import { Paper, Typography, Tabs, Tab, Input, Button } from '@material-ui/core';
import useStyles from './style';
import { toast } from 'react-toastify';
import { loginApi,RegisterApi } from '../../../api/ApiAuth';
const Login_Tab_Value = 1
const Reg_Tab_Value = 2

const Auth = () => {
    const classes = useStyles();
    const [tab, setTabs] = useState(Login_Tab_Value);
    //login state
    const [usernameLogin, setUsernameLogin] = useState();
    const [passwordLogin, setPasswordLogin] = useState();
    //register state
    const [usernameReg, setUsernameReg] = useState();
    const [passwordReg, setPasswordReg] = useState();
    const [confpasswordReg, setConfPasswordReg] = useState();
    const [nameReg, setNameReg] = useState();

    const validateRegister = (person) => {
        if (!person.name) {
            return "نام کامل خود را وارد کنید"
        }
        if (!person.username) {
            return "نام کاربری را وارد کنید"
        }
        if (!person.password) {
            return "رمز عبور  را وارد کنید"
        }
        if(person.password!==person.configpassword){
            return "رمز عبور مجدد اشتباه وارد شده است"
        }
       
    }


    const handleRegister = () => {
        const person = {
            name: nameReg,
            username: usernameReg,
            password: passwordReg,
            configpassword: confpasswordReg
        }
        const error = validateRegister(person);
        if (error) {
            return toast.warn(error);
            
        }
        person.configpassword=undefined;
        RegisterApi(person, (isok, data) => {
            if (!isok)
                return toast.error("ثبت نام انجام نشد");
            toast.success("با موفقیت ثبت نام شدید");
             localStorage.setItem("name", data.name)
             localStorage.setItem("username", data.username)
             localStorage.setItem("image", data.image)
             localStorage.setItem("X-auth-token", data["x-auth-token"])


        })
    }


    const validateLogin = (user) => {
        if (!user.username) {
            return "نام کاربری را وارد کنید"
        }
        if (!user.password) {
            return "رمز عبور  را وارد کنید"
        };

    }
    const handleLogin = () => {
        const user = {
            username: usernameLogin,
            password: passwordLogin

        };
        const error = validateLogin(user);
        if (error) {
            return toast.warn(error);
        }
        loginApi(user, (isok, data) => {
            if (!isok)
                return toast.error("انجام نشد");
            toast.success("با موفقیت وارد شدید");
            localStorage.setItem("name", data.name)
            localStorage.setItem("username", data.username)
            localStorage.setItem("image", data.image)
            localStorage.setItem("X-auth-token", data["x-auth-token"])


        })
    }

    const handleChangeTab = (e, newValue) => {
        setTabs(newValue);
    }
    return (<Paper className={classes.container}>
        <Typography className={classes.headerTitle}>
            خوش آمدید
</Typography>
        <Tabs
            value={tab}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChangeTab}
            aria-label="disabled tabs example"
        >
            <Tab label="ورود" value={Login_Tab_Value} className={classes.loginTitle} />
            <Tab label="ثبت نام" value={Reg_Tab_Value} className={classes.loginTitle} />
        </Tabs>
        {tab === Login_Tab_Value &&
            <div className={classes.containerinpt}>
                <Typography>  نام کاربری</Typography>
                <Input className={"inp_m_b"} placeholder={"username "} value={usernameLogin} onChange={e => setUsernameLogin(e.target.value)} />
                <Typography>رمز ورود</Typography>
                <Input className={"inp_m_b"} placeholder={"password  "} value={passwordLogin} onChange={e => setPasswordLogin(e.target.value)} />
                <Button variant={"contained"} className={classes.btn} onClick={handleLogin}>ورود</Button>


            </div>}
        {tab === Reg_Tab_Value &&
            <div className={classes.containerinpt}>
                <Typography>  نام </Typography>
                <Input className={"inp_m_b"} placeholder={"name "} value={nameReg} onChange={e => setNameReg(e.target.value)} />
                <Typography>  نام کاربری</Typography>
                <Input className={"inp_m_b"} placeholder={"username "} value={usernameReg} onChange={e => setUsernameReg(e.target.value)} />
                <Typography>رمز عبور</Typography>
                <Input className={"inp_m_b"} placeholder={"password  "} value={passwordReg} onChange={e => setPasswordReg(e.target.value)} />
                <Typography>تکرار رمز عبور</Typography>
                <Input className={"inp_m_b"} placeholder={"password  "} value={confpasswordReg} onChange={e => setConfPasswordReg(e.target.value)} />
                <Button variant={"contained"} className={classes.btn} onClick={handleRegister}>ثبت نام</Button>
            </div>}

    </Paper>);
}

export default Auth;