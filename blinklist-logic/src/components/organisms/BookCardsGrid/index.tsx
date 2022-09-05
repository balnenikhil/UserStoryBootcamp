import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { Bookcard } from '../../molecules/BookCard'

export const BookCardsGrid = () => {
  useEffect(() => {
    //api call to get all books data
  })
  
  return (
    <div>
      <Grid container>
        {/* mapping over Book Data From Api Call */}
        <Grid item>
          <Bookcard bookImage={''} bookName={''} authorName={''} timeRead={''} progressValue={0} iconSource={''}></Bookcard>
        </Grid>
      </Grid>
    </div>
  )
}
