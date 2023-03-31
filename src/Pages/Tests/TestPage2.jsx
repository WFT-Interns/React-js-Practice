import {Instance} from '../../Config/AxiosInstance'
import { useQuery } from "react-query";
function TestPage2() {
  const {isLoading, data, error} = useQuery(["datas"], () =>
  Instance.get('/posts')
    .then((res) => res.data)
);
if (isLoading) return "Loading...";

if (error) return "An error has occurred: " + error.message;

console.log(data)
  return (
    <>
      {data.map(datas => {
        return (
            <ul>
              <li>
                
                  {datas.id}<br></br>
                  {datas.userId}<br></br>
                  {datas.title}<br></br>
                  {datas.body}
                
              </li>
            </ul>
        )
      })}

    </>
  );

}

export default TestPage2;