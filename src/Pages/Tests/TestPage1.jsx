import React, {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { Typography,Button} from '@mui/material'
import './style.css'
import {axiosInstance} from '../../Config/AxiosInstance'
function DataFetching() {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        axiosInstance.get("/users")
        .then(res=>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })

    })
    const navigate=useNavigate();
  return (
    <div className="container">
    <h1>Data from API</h1>
    <Button sx={{ marginLeft: 73,marginBottom:5, border: '2px solid black'}}  variant='contained' color='primary' type='button' onClick={()=>navigate("/nextdata")}>UsequeryData</Button>
    <div className='grid'>
        {posts.map((post)=>{
            return(
                <div className='card' key={post.id}>
                    <Typography variant='h1'>{post.id}</Typography>
                    <Typography variant='h4'>{post.name}</Typography>
                    <Typography variant='p'>{post.username}</Typography>
                    <Typography variant='p'>{post.email}</Typography>
                    <Typography variant='h5'>{post.address.street}</Typography>
                    <Typography variant='h5'>{post.address.city}</Typography>
                    <Typography variant='h5'>{post.address.geo.lat}</Typography>
                    <Typography variant='h5'>{post.address.geo.lng}</Typography>
                    
                    </div>
            );
        })}
    </div>
    
    </div>
  )
}
export default DataFetching;