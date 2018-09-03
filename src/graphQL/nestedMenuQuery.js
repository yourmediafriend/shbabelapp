import gql from "graphql-tag";

const GET_NESTED_MENU = gql`
{
  menuByName(name: "sidemenu") {
    links {
      label
      url {
        path
      }
      links {
        label
        url {
          path
        }
      }
    }
  }
}
`;

export default GET_NESTED_MENU;




