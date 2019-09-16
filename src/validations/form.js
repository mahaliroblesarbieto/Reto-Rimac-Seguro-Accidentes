export const handleValidateFirstStepForm = values => {
    const error = {};
    if (!values.dni) {
      error._error = "dni, valor requerido";
    } else if (!values.email ) {
      error._error = "email, valor requerido";
    } else if (!values.ensureYourself) {
      error._error = "ensureYourself, valor requerido";
    }else{
      if(values.dni.length !== 8){
        error._error = "dni, valor requerido";
    }
  }
    return error;
  };

  export const handleValidateUserDataForm = values => {
    const error = {};
    if (!values.dni) {
      error._error = "dni, valor requerido";
    } else if (!values.name ) {
      error._error = "name, valor requerido";
    } else if (!values.lastName) {
      error._error = "lastname, valor requerido";
    } else if(!values.secondLastName) {
        error._error = "secondLastName, valor requerido";
    } else if(!values.gender) {
        error._error = "gender, valor requerido";
    }  else if(!values.birthday) {
        error._error = "birthday, valor requerido";
    }
    return error;
  };