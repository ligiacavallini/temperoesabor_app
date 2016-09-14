// Dependencies.
import React from 'react';

// Layout components.
import Main from '../../layouts/main';
import Content from '../../layouts/content';

// Utilities.
import utils from '../../utils';

// Define class.
class RecipesList extends React.Component {
  constructor(props) {
    super(props);

    // Set page title.
    utils.title(props);
  }

  // Render method.
  render() {
    return (
      <Main>
        <h1>About Us </h1>
        <p>teste</p>
      </Main>
    );
  }
}

// Export.
export default RecipesList;
