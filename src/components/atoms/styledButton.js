
import { styled } from "@mui/system";
import { Button } from "@mui/material";

const StyledButton = styled(Button)`
  color: #BF4F74;
  font-size: 1em;
  margin: 2rem;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  background-color: white;
  border-radius: 10px;
  cursor: pointer;

  &:hover{
    background-color: black;
  }
`;

export default StyledButton