import react, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {Card} from '../components/Card'
import { useFetch } from '../hooks/useFetch';
 export const MovieList=({title,apiPath})=>{
    const {data: movies}=useFetch(apiPath)
    useEffect(()=>{
        document.title=title;
    })
    const navigate=useNavigate()
    return(
        <div>
            <main className='container'>
                {title=="Browse Movies"?(
                    <div className='bg-body-teritary p-5 border mb-5'>
                        <h3 className='text-primary'>Welcome to MovieMania</h3>
                        <p className='lead'>Your ultimate destination for the latest blockbusters, timeless classics, and must-watch shows! Explore a vast collection of movies across genres, read reviews, watch trailers, and stay updated with trending releases. Whether you're a fan of action, romance, thriller, or comedy, we have something for everyone. Start your cinematic journey today!"</p>
                        <button className='btn btn-primary' onClick={()=>navigate('/movies/upcoming')}>Explore Now</button>
                    </div>
                ):""}
                <h5 className='py-2 margin-bottom text-danger'>{title}</h5>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 py-2'>
                    {movies.map((movie)=>{
                        return <Card key={movie.id} movie={movie}/>;
                    })}
                </div>
            </main>
        </div>
    )
}
