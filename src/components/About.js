import React from "react";
import User from "./User";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          Logged In User
          <UserContext.Consumer>
            {({ loggedInUser }) => {
              return <h1 className="text-bold">{loggedInUser}</h1>;
            }}
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste React Web Series</h2>

        <User name={"krishna from functional component"} />

        {/* <UserClass name={"First"} location={"chennai class"} /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React Web Series</h2>

//       {/* <User name={"krishna from functional component"} /> */}

//       <UserClass
//         name={"krishna from class component"}
//         location={"chennai class"}
//       />
//     </div>
//   );
// };

export default About;
