import React from 'react';
import styled from 'styled-components'


const Container = styled.div`
  height: 100vh;
  align-items: center;
  padding: 1em;
  justify-content: center;
  display: inline-table;
  background-color: #3d3b40;
`;

const ImageContainer = styled.div`
  height: 50%;
  width: 50%;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Image = styled.img`
  border-radius: 60px;
  padding: 2em;
  margin: auto;
  width: 30%;
`;

const Title = styled.h1`
  font-size: 5em;
  text-align: center;
  color: #eaf5f1;
`;

class ImagesAPI extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {

        fetch("http://localhost:8081/images",{
            method: 'GET',
        })
        .then(response => response.json())
        .then(
            (result) => {
              console.log(result.ImageLinks);
              this.setState({
                isLoaded: true,

                //populates the items array with the imagelinks json object
                items: result.ImageLinks
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

        //iterates through the image links and sets the link to the sourse of the img html object
        return (
            <>
            <Container>
              <Title>Images Rest API Demo Call</Title>

              {items.map((data, key) => {
                return (
                  <Image key = {key} src = {data}></Image>
                );
              })}
            </Container>
          </>
        );
      }
    }
  }

  export default ImagesAPI;