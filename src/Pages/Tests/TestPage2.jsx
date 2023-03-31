import {Instance} from '../../Config/AxiosInstance'
import { useQuery } from "react-query";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function TestPage2() {
  const {isLoading, data, error} = useQuery(["datas"], () =>
  Instance.get('/posts')
    .then((res) => res.data)
);
if (isLoading) return "Loading...";

if (error) return "An error has occurred: " + error.message;

console.log(data)
  return (
    <TableContainer component={Paper}>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>UserID</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Body</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>{row.title}</TableCell>
            <TableCell>{row.body}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  
  );
}
export default TestPage2;