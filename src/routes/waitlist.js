import React from 'react';
import styled from 'styled-components'


//styles the main container and elements
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
  font-size: 2em;
  text-align: center;
  color: #eaf5f1;
`;

class WaitListAPI extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  

    componentDidMount() {

        //fetches data from backend server
        fetch("http://localhost:8081/waitlist",{
            method: 'GET',
        })
        .then(response => response.json())
        .then(
            (result) => {
              console.log(result.WaitingList);
              this.setState({
                isLoaded: true,

                //populates the items array with the waitinglist json object
                items: result.WaitingList
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
        //If the waitlist is empty
        if(!items){
          return(
            <>
            <Container>
              <Title>RentRoll Rest API Demo Call</Title>
              <Text>There is no one currently on the waitlist</Text>
            </Container>
            </>
          )
        }
        else{
            return (
              <>
              <Container>
                <Title>RentRoll Rest API Demo Call</Title>
                {items.map((data, key) => {
                  return (
                    <Text key={key}>
                      {data.AddedBy +
                        "needs a facility by " +
                        data.DateNeeded}
                    </Text>
                  );
                })}
              </Container>
            </>
          );
        }
        }
    }
  }

  export default WaitListAPI;