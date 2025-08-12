import { Link } from 'expo-router';
import { View, Text, Image, TouchableOpacity } from 'react-native';

interface TrendingMovie {
    searchTerm: string,
    movie_id: number,
    title: string,
    count: number,
    poster_url: string
};

const TrendingCard = ({ movie, index }: {movie: TrendingMovie, index: number}) => {
  return (
    <Link href={`/movies/${movie.movie_id}`} className="relative" asChild>
        <TouchableOpacity>
            <Image 
                source={{ uri: movie.poster_url ? movie.poster_url : 'https://placehold.co/600x400/1a1a1a/ffffff.png' }}
                className='w-32 h-48 rounded-lg'
                resizeMode='cover'
            />
            <Text className="text-white font-bold" numberOfLines={2}>{ movie.title }</Text>
            <Text className="absolute text-white font-bold text-4xl bottom-6 left-4 shadow-lg">
                { index + 1 }
            </Text>
        </TouchableOpacity>
    </Link>
  );
}

export default TrendingCard;