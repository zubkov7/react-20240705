import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(rootElement);

// reactRoot.render(
//   React.createElement(
//     "ul",
//     {},
//     React.createElement("li", {}, 1),
//     React.createElement("li", {}, 2),
//     React.createElement("li", {}, 3)
//   )
// );

reactRoot.render(
  <ul className='someCLass'>
    {["1", "2", "3", "4"].map((id) => (
      <li>{id}</li>
    ))}
  </ul>
);
