import logo from "./logo.svg";
import "./App.css";

function App() {
  let values = [
    {
      item: "Free",
      amount: "$0",
      user: "✔Single User",
      storage: "✔5GB Storage",
      public: "✔Unlimited public Projects",
      community: "✔Community Access",
      private: <div className="disable">❌Unlimited Private Projects</div>,
      phone: <div className="disable">❌Dedicated Phone Support</div>,
      domain: <span className="disable">❌Free Subdomain</span>,
      report: <div className="disable">❌Monthly Status Reports </div>,
    },
    {
      item: "PLUS",
      amount: "$9",
      user: <span><b>✔5G</b> Users</span>,
      storage: "✔50GB Storage",
      public: "✔Unlimited public Projects",
      community: "✔Community Access",
      private: "✔Unlimited Private Projects",
      phone: "✔Dedicated Phone Support",
      domain: "✔Free Subdomain",
      report: <div className="disable">❌Monthly Status Reports </div>,
    },
    {
      item: "PRO",
      amount: "$49",
      user: <span><b>✔Unlimited</b> Users</span>,
      storage: "✔150GB Storage",
      public: "✔Unlimited Pubc Projects",
      community: "✔Community Access",
      private: "✔Unlimited Private Projects",
      phone: "✔Dedicated Phone Support",
      domain: (
        <span>
          <b>✔Unlimited</b> Free Subdomain
        </span>
      ),
      report: "✔Monthly Status Reports",
    },
  ];
  return (
    <div>
      <div id="title">Pricing Table Snippet</div>
      <div className="App">
        {values.map((eachone, id) => (
          <Card
            item={eachone.item}
            amount={eachone.amount}
            user={eachone.user}
            storage={eachone.storage}
            public={eachone.public}
            community={eachone.community}
            private={eachone.private}
            phone={eachone.phone}
            domain={eachone.domain}
            report={eachone.report}
          />
        ))}
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <div id="package">
        <div className="inside header">{props.item}</div>
        <div className="inside rate">
          <b> {props.amount}</b>/month
        </div>
      </div>
      <hr></hr>

      <p>{props.user}</p>
      <p>{props.storage}</p>
      <p>{props.public}</p>
      <p>{props.community}</p>
      <p>{props.private}</p>
      <p>{props.phone}</p>
      <p>{props.domain}</p>
      <p>{props.report}</p>

      <button>Button</button>
    </div>
  );
}

export default App;
