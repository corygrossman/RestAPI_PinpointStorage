import React from 'react';
import styled from 'styled-components'


const Container = styled.div`
  height: 100vh;
  margin: auto;
  padding: 1em;
  align-items: center;
  justify-content: center;
  background-color: #3d3b40;
`;

const Title = styled.h1`
  font-size: 5em;
  text-align: center;
  color: #eaf5f1;
`;

const Text = styled.h2`
  font-size: 1.5em;
  padding: .2em;
  text-align: center;
  color: #eaf5f1;
`;

class RentRollAPI extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {

        fetch("http://localhost:8081/rentroll",{
            method: 'GET',
        })
        .then(response => response.json())
        .then(
            (result) => {
              console.log(result.RentRoll);
              this.setState({
                isLoaded: true,

                //populates the items array with the rentroll json object
                items: result.RentRoll
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <>
            <Container>
              <Title>RentRoll Rest API Demo Call</Title>
              {items.map((data, key) => {
                return (
                  <Text key={key}>
                    {data.CustomerName + " currently occupies unit " + data.RoomNumber + " and moved in: " + data.DateMovedIn}
                  </Text>
                );
              })}
            </Container>
          </>
        );
      }
    }
  }

  export default RentRollAPI;