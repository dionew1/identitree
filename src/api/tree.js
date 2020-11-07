import axios from "axios";

export default axios.create({
  baseURL: "http://lovely-asa-tree.herokuapp.com/api/v1",
});
