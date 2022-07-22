import { MongoClient }from "mongodb";

const uri = "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority";
const mongo = new MongoClient(uri);

export default mongo;