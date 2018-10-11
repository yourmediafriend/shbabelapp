import gql from "graphql-tag";


const GET_GRID = gql`
query nodeQuery($limit: Int!) {
  nodeQuery(limit: $limit, sort: [{field: "created", direction: DESC}], filter: {conditions: [{operator: EQUAL, field: "type", value: ["grid_placeholders"]}]}) {
    entities {
      ... on NodeGridPlaceholders {
        created
        nid
        title
        fieldSubTitle
        entityUrl {
          path
          routed
        }
        body {
          value
          processed
          summary
          summaryProcessed
        }
      }
    }
  }
}

`;

export default GET_GRID;




