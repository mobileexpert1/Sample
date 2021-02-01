const Body = {
    registration(
      firstName,
      lastName,
      pass,
      confirmPass,
      email,
      number,
           
    ) {
      var string = {
        f_name: firstName,
        l_name:lastName,
        password: pass,
        passwordconfirm:confirmPass,
        email: email,
        mobile: number,
      };
      return string;
    }
  };
  
  export default Body;
  