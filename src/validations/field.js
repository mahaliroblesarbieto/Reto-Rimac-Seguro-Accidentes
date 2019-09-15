export const dniNumber = value =>
  value && !/^(0|[1-9][0-9]{7})$/i.test(value)
    ? 'Número de dni incorrecto, debe tener 8 dígitos'
    : undefined;

export const handleValidateDniNumber = (value) => {
  const text = value.replace(/[a-zA-Z]/, "");
  if (text.length <= 8) {
    return text;
  } else {
    return text.slice(0, 8);
  }
}

export const handleValidateNameAndLastName = value => {
  const text = value.replace(/[0-9]/, "");
  if (text.length <= 40) {
    return text;
  } else {
    return text.slice(0, 40);
  }
};

