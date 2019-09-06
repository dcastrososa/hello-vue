import * as yup from "yup";

const data = {
  message: "Hello world",
  form: {
    email: "",
    password: ""
  },
  error: "",
  loading: false
};

function login() {
  this.loading = true;

  setTimeout(() => (this.loading = false), 2000);
}

function validateForm() {
  schema
    .validate(this.form)
    .then(() => (this.error = ""))
    .catch(err => {
      this.error = err.errors[0];
    });
}

export default {
  name: "login",
  data() {
    return data;
  },
  methods: {
    login: login,
    validateForm: validateForm
  },
  created: () => {
    console.log("login created");
  }
};

const schema = yup.object().shape({
  email: yup.string().required("Escriba email!"),
  password: yup.string().required("Escriba contrasena!")
});
