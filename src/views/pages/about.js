// Dependencies.
import React from 'react';

// Layout components.
import Main from '../../layouts/main';
import Content from '../../layouts/content';

// Utilities.
import utils from '../../utils';


// Define class.
class AboutPage extends React.Component {
  constructor(props) {
    super(props);

    // Set page title.
    utils.title(props);
  }

  // Render method.
  render() {
    let text = 'About me text';
    return (
      <Main>
        <h1>About Us </h1>
        <p>{text}</p>
      </Main>
    );
  }
}

// Export.
export default AboutPage;
