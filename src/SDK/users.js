import Clerk from "@clerk/clerk-js";
import axios from "axios";

const get = async () => {
  try {
  } catch (error) {
    throw error;
  }
};

const register = async ({ email, password }) => {
  try {
    console.log({ email: email.value, password: password.value });
  } catch (error) {
    throw error;
  }
};

const update = async (data) => {
  try {
    console.log(data);
  } catch (error) {
    throw error;
  }
};

const login = async ({ email, password }) => {
  window.Clerk.openSignIn();
};

const logout = async () => {
  try {
    console.log("Logged Out");
  } catch (error) {
    throw error;
  }
};

const userData = {
  get,
  register,
  update,
  login,
  logout,
};

export default userData;
