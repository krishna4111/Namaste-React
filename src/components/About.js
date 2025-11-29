import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About Class Component</h1>
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
