import {useState} from 'react';
import styled from 'styled-components';

// Styled Components
const SearchContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 300px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #FF8200;
  color: white;
  cursor: pointer;
`;

// Define a type for guide
interface Guide {
  title: string;
  content: string;
}

// Dummy data for search results
const guides: Guide[] = [
  { title: "Introduction to Flipper Zero", content: "Introduction to Flipper Zero..." },
  { title: "Using RFID with Flipper Zero", content: "Learn how to clone RFID tags..." },
  { title: "Customizing Flipper Zero Firmware", content: "Steps to customize firmware..." }
];

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Guide[]>([]); // Use the Guide type for state

  const handleSearch = () => {
    if (!searchTerm.trim()) return;

    const results = guides.filter(guide =>
      guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
  };

  return (
    <div>
      <SearchContainer>
        <Input
          type="text"
          placeholder="Search guides..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </SearchContainer>
      <div>
        {searchResults.length > 0 ? (
          searchResults.map((result, index) => (
            <div key={index}>
              <h3>{result.title}</h3>
              <p>{result.content.substring(0, 100)}...</p>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
