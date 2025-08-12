import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { Star, MoveLeft } from 'lucide-react-native';
import { router, useLocalSearchParams } from 'expo-router';
import useFetch from '@/services/useFetch';
import { fetchMovieDetails } from '@/services/api';

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  const {
    data: movie,
    loading
  } = useFetch(() => fetchMovieDetails(id as string));

  return (
    <View className='flex-1 bg-primary'>
      <ScrollView className='relative'>
          <Image 
            source={{ uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}` }} 
            className='w-full'
            style={{ height: 450 }}
            resizeMode='stretch'
          />
          <View className='flex-1 flex-col gap-4 px-5 mt-4' style={{ paddingBottom: 42 }}>
            <Text className='text-white text-3xl font-bold'>{ movie?.title }</Text>

            <View className='flex-row items-center w-full mt-2' style={{ gap: 20 }}>
              <Text className='text-white text-lg'>{movie?.release_date.split('-')[0]}</Text>
              <Text className='text-white text-lg'>{ movie?.runtime }m</Text>
            </View>

            <View className='flex-row items-center mt-2' style={{ gap: 6 }}>
              <View>
                <Star color="#ffea00" size={14} fill={'#ffea00'} />
              </View>
              <Text className='text-white font-bold'>{ Math.round(movie?.vote_average ?? 0 / 2) }/10</Text>
              <Text className='text-sm' style={{ color: '#ddd' }}>({movie?.vote_count} Votes)</Text>
            </View>

            {/* Overview */}
            <View className='flex-col mt-4'>
              <Text className='text-xl font-bold' style={{ color: '#ddd' }}>Overview</Text>
              <Text className='text-md text-white'>{ movie?.overview }</Text>
            </View>

            {/* Genres */}
            <View className='flex-col mt-4'>
              <Text className='text-xl font-bold' style={{ color: '#ddd' }}>Genres</Text>
              <Text className='text-md text-white'>{ movie?.genres?.map((g) => g.name).join(' - ') || 'N/A' }</Text>
            </View>

            {/* Budget */}
            <View className='flex-col mt-4'>
              <Text className='text-xl font-bold' style={{ color: '#ddd' }}>Budget</Text>
              <Text className='text-md text-white'>{ `$${movie?.budget! / 1_000_000} millions` }</Text>
            </View>

            {/* Revenue */}
            <View className='flex-col mt-4'>
              <Text className='text-xl font-bold' style={{ color: '#ddd' }}>Revenue</Text>
              <Text className='text-md text-white'>{ `$${(movie?.revenue! / 1_000_000).toFixed(2)} millions` }</Text>
            </View>

            {/* Production Companies */}
            <View className='flex-col mt-4'>
              <Text className='text-xl font-bold' style={{ color: '#ddd' }}>Production Companies</Text>
              <Text className='text-md text-white'>{ movie?.production_companies?.map((p) => p.name).join(' - ') || 'N/A' }</Text>
            </View>
          </View>
          <TouchableOpacity 
            onPress={router.back}
            className='absolute bg-accent flex flex-row items-center'
            style={{ top: 40, left: 20, gap: 6 }}  
          >
            <MoveLeft color="#ffffff" />
            <Text className='text-white'>Go Back</Text>
          </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default MovieDetails;