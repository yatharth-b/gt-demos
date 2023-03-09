import logo from "./logo.svg";
import "./App.css";
import CasClient, { constant } from "react-cas-client";

let casEndpoint = "sso.gatech.edu";
let casOptions = { version: constant.CAS_VERSION_2_0 };

let casClient = new CasClient(casEndpoint, casOptions);

function App() {
  // Basic usage
  const queryParameters = new URLSearchParams(window.location.search)
  const ticket = queryParameters.get('ticket')
  if (ticket) {
    console.log(ticket)
    fetch("https://sso.gatech.edu/cas/serviceValidate?" + new URLSearchParams({
      ticket: ticket,
      service: "http://localhost:3000/?status=in_process",
      version: "3.0"
    })).then((res) => res.text()).then((res) => {console.log(res)})
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button
          onClick={() => {
            casClient
              .auth()
              .then((successRes) => {
                console.log(successRes);
                console.log('oksdfkjfsidjfi')
                // Login user in state / locationStorage ()
                // eg. loginUser(response.user);

                // If proxy_callback_url is set, handle pgtpgtIou with Proxy Application

                // Update current path to trim any extra params in url
                // eg. this.props.history.replace(response.currentPath);
              })
              .catch((errorRes) => {
                console.error(errorRes);
                // Error handling
                // displayErrorByType(errorRes.type)

                // Update current path to trim any extra params in url
                // eg. this.props.history.replace(response.currentPath);
              });
          }}
        >login to gt </button>
      </header>
    </div>
  );
}

export default App;
