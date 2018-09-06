import gql from "graphql-tag";

const GET_TRACKS = gql`
  {
    nodeQuery(filter: {conditions: [{operator: EQUAL, field: "type", value: ["mixes"]}]}) {
      entities {
        ... on Node {
          nid
          title
          fieldTrack {
            uri
          }
          fieldArtist
          fieldCover
        }
      }
    }
  }
  `;


export default GET_TRACKS;