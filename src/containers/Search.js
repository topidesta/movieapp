import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { searchMovies } from '../action/index';

const Search = () => {

    useEffect(() => {
      return () => {
      };
    }, [])
    
  return (
    <div>
      
    </div>
  )
}

export default connect(searchMovies)(Search)