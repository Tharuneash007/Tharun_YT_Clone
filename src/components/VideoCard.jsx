import React from 'react'
import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { demoVideoTitle, demoVideoUrl, demoChannelTitle } from "../utilities/constants"

const VideoCard = ({video: {id:{videoId}, snippet}}) => (

    <Card sx={{width:{xs:'90vw',md: '305px'}, boxShadow:'none', borderRadius:'0'}}>

      <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>

      <CardMedia image={snippet.thumbnails.high.url} sx={{ height: 160}}/>

      <CardContent sx={{backgroundColor: '#1e1e1e', height: '100px'}}>

        <Typography variant="subtitle1" fontWeight="bold" color="white">
          {snippet.title.slice(0,60) || demoVideoTitle.slice(0,60)}
        </Typography>

        <Typography variant="subtitle2" fontWeight="bold" color="gray">
          {snippet.channelTitle || demoChannelTitle}
          <CheckCircle sx={{fontSize: 12, color: "gray", ml: "5px"}}/>
        </Typography>
  
      </CardContent>
      </Link>
    </Card>

  );

export default VideoCard