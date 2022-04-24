import React from 'react';
var axios = require('axios');
var XMLHttpRequest = require('xhr2');

class AccessingAPI extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {

        // var xhr = new XMLHttpRequest();
        // xhr.withCredentials = true;

        // xhr.addEventListener("readystatechange", function() {
        //     if(this.readyState === 4) {
        //     console.log(this.responseText);
        //     }
        // });

        // xhr.open("GET", "https://api.webselfstorage.com/wssapi/v2/location/1036550/rentroll");
        // xhr.setRequestHeader("Authorization", "Basic 6eb8b0a7-f572-4fdb-a9e9-8d360f6991fc");

        // xhr.send();

        // var config = {
        //     method: 'get',
        //     url: 'https://api.webselfstorage.com/wssapi/v2/location/1036550/rentroll',
        //     headers: { 
        //       'Authorization': 'Basic 6eb8b0a7-f572-4fdb-a9e9-8d360f6991fc'
        //     }
        //   };
          
        //   axios(config)
        //   .then(function (response) {
        //     console.log(JSON.stringify(response.data));
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });

        // var myHeaders = new Headers();
        // myHeaders.append("Authorization", "Basic 6eb8b0a7-f572-4fdb-a9e9-8d360f6991fc");

        // var requestOptions = {
        // method: 'GET',
        // headers: myHeaders,
        // redirect: 'follow'
        // };

        fetch("http://localhost:8081/",{
            method: 'GET',
        })
        .then(response => response.json())
        .then(
            (result) => {
              console.log(result.RentRoll);
              this.setState({
                isLoaded: true,
                items: result.RentRoll
              });
              //console.log("items" + items);
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
            <div>
              {items.map((data, key) => {
                return (
                  <div key={key}>
                    {data.Address1 +
                      " , " +
                      data.City}
                  </div>
                );
              })}
            </div>
          </>
        );
      }
    }
  }

  export default AccessingAPI;