// import React from 'react';
// import { Query } from 'react-apollo';
// import { gql } from 'apollo-boost';

// const GET_COUNTRIES = gql`
//   {
//     countries {
//       name
//       code
//     }
//   }
// `;

// const LaunchList = () => (
//   <Query query={GET_COUNTRIES}>
//     {({ loading, error, data }) => {
//       console.log("data : ", data)
//     //   if(data)console.log("data : ", data.ships)
        
//       if (loading) return <h1>Loading...</h1>;
//       if (error) return <h1>Error :</h1>;
      
//       return (
//         <div>
// 			hii
// 		</div>
//       );
      
//     }}
//   </Query>
// );

// export default LaunchList;