import React, {Profiler} from 'react';
import Directory from "../../components/directory/directory.component";
import './homepage.style.scss';

const HomePage = () => (
  <div className="homepage">
    <Profiler id="Directory" onRender={(id, phase, actualDuration) => {
      console.log({id, phase, actualDuration})
    } }>
      <Directory/>
    </Profiler>
  </div>
);
 export default HomePage;