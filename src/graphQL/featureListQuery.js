import gql from "graphql-tag";

const GET_TRACKS = gql`
{
  nodeQuery(filter: {conditions: [{operator: EQUAL, field: "type", value: ["feature_list"]}]}) {
    entities {
      ... on NodeFeatureList {
        nid
        title
        fieldBody
      }
    }
  }
}
`;

export default GET_TRACKS;