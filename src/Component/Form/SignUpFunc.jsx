import { useTheme } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../Utils/useNotification";
import { useNavigate } from "react-router-dom";
import { UpdatePasswordFunction } from "../../Redux/ReduxAction/AuthAction";
import AuthReducer from './../../Redux/ReduxReducers/AuthReducer';

const SignUpFunc = (id) => {
  // const regPassword =
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  const regPassword = /^.{6,}$/;

  // const regEmail =
  //   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // const phoneRegExp =
  //   /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // ======================================================================
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // ===================================
  const handleClick = async (data) => {
    if (data.pass !== data.confirmpass) {
      notify("Please Check your pass again", "warn");
      return;
    }
    const NewData = {
      newPassword: data.pass,
      token:id,
    };
    setLoading(true);
    console.log(NewData);
    await dispatch(UpdatePasswordFunction(NewData));
    setLoading(false);
    setIsSubmitted(true);
  };

  var res = [];
  console.log(res);
  res = useSelector((state) => state.AuthReducer.UpdatePass);
  useEffect(() => {
    if (loading === false && isSubmitted === true) {
      console.log(res);
      if (res && res.status === 200) {
        notify("Your Pass Updated successfully", "success");
        console.log(res);
        // setTimeout(() => {
        //   navigate("/login");
        // }, 2500);
      }
      if (res.response) {
        notify("You can not register using this email", "error");
      }
      setIsSubmitted(false); // Reset the flag when component re-renders
    }
  }, [loading, isSubmitted]);

  return [
    regPassword,
    showPassword,
    theme,
    errors,
    register,
    handleSubmit,
    handleClick,
    handleTogglePasswordVisibility,
    loading,
  ];
};

export default SignUpFunc;
