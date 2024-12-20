const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email === "") {
    return { error: true, helperText: "O campo e-mail é obrigatório" };
  } else if (!emailRegex.test(email)) {
    return { error: true, helperText: "O e-mail inválido" };
  } else {
    return { error: false, helperText: null };
  }
};

const validatePassword = (password) => {
  if (password === "") {
    return { error: true, helperText: "O campo senha é obrigatório" };
  } else if (password.length > 5) {
    return { error: false, helperText: null };
  } else {
    return {
      error: true,
      helperText: "A senha precisa ter 6 ou mais caractéres.",
    };
  }
};

export { validateEmail, validatePassword };
