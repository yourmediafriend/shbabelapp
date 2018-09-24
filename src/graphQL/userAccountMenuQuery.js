import gql from "graphql-tag";

const GET_LOGIN_MENU = gql`
{
  menuByName(name: "account-menu") {
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

export default GET_LOGIN_MENU;




