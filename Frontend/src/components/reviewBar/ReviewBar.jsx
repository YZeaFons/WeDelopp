import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import style from './ReviewBar.module.css'

const ReviewBar = ({reviews}) => {
    const allReviews = reviews;
    const rating5 = allReviews.filter(review => review.rating === 5);
    const rating4 = allReviews.filter(review => review.rating === 4);
    const rating3 = allReviews.filter(review => review.rating === 3);
    const rating2 = allReviews.filter(review => review.rating === 2);
    const rating1 = allReviews.filter(review => review.rating === 1);


    const data = [
        { rating: "5", reviews: rating5.length },
        { rating: '4', reviews: rating4.length },
        { rating: '3', reviews: rating3.length },
        { rating: '2', reviews: rating2.length },
        { rating: '1', reviews: rating1.length },
         ];
        
         const CustomTooltip = ({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <div className={style.customTooltip}>
                  <p>{`Rating: ${label}`}</p>
                  <p>{`Reviews: ${payload[0].value}`}</p>
                </div>
              );
            }   
            return null;
          };
          
        
    return (
        <ResponsiveContainer width='49%' height={300} className={style.container}>
            <BarChart data={data} height={200} margin={{ top:25 }}>
                <CartesianGrid stroke="grey" strokeDasharray="3 3" />
                <XAxis dataKey='rating' />
                <YAxis />
                <Tooltip content={<CustomTooltip />}  />
                <Bar dataKey='reviews' fill='#6940ff' barSize={30}/>
            </BarChart>
        </ResponsiveContainer>
    )
}

export default ReviewBar