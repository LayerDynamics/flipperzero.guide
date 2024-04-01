import styled from 'styled-components';

// Styled components for the list and list items
const StyledList = styled.ul`
  list-style-type: none; /* Removes default bullet points */
  padding: 0;
`;

const StyledListItem = styled.li`
  margin: 10px 0; /* Adds some spacing between list items */
`;

const StyledLink = styled.a`
  color: #000000; /* Bootstrap link color for consistency */
  text-decoration: none; /* Removes underline from links */

  &:hover {
    text-decoration: underline; /* Adds underline on hover for visual feedback */
  }
`;

const RepositoryList = () => {
  return (
    <div>
      <h2>Useful Repositories</h2>
      <StyledList>
        {/* List your GitHub repository links here */}
        <StyledListItem>
          <StyledLink href="https://github.com/username/repo1" target="_blank" rel="noopener noreferrer">
            Repository 1
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink href="https://github.com/username/repo2" target="_blank" rel="noopener noreferrer">
            Repository 2
          </StyledLink>
        </StyledListItem>
        {/* Add more repositories as needed */}
      </StyledList>
    </div>
  );
};

export default RepositoryList;
