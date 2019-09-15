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