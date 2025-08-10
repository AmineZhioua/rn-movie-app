import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import MovieCard from '@/components/MovieCard';
import SearchBar from '@/components/SearchBar';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { 
    data: movies, 
    loading: moviesLoading, 
    error: moviesError,
    refetch: loadMovies,
    reset, 
  } = useFetch(() => fetchMovies({ query: searchQuery }), true );

  useEffect(() => {
    const searchFn = setTimeout(async() => {
      if(searchQuery.trim()) {
        await loadMovies();
      } else {
        reset();
      }
    }, 500);

    return () => clearTimeout(searchFn);
  }, [searchQuery]);


  return (
    <View className='flex-1 bg-primary'>
      {/* Background */}
      <Image 
        source={require('../../assets/images/partial-react-logo.png')} 
        className="absolute z-0"
        resizeMode='cover'
      />

      <FlatList 
        data={movies}
        renderItem={({ item }) => (
          <MovieCard 
           {...item}
          />
        )}
        keyExtractor={ (item) => item.id.toString() }
        numColumns={3}
        className='px-2'
        columnWrapperStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
          marginVertical: 16
        }}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        ListHeaderComponent={
          <>
            <View className='mt-20 justify-center w-full'>
              <SearchBar 
                placeholder='Search for movies...' 
                value={searchQuery}
                onChangeText={(text: string) => setSearchQuery(text)}
              />
            </View>

            {moviesLoading && (
                <ActivityIndicator
                  size={'large'}
                  color={'#fff'}
                />
              )
            }

            {moviesError && (
              <Text className='text-red-600 text-lg font-bold'>
                { moviesError.message }
              </Text>
            )}

            {!moviesLoading && !moviesError && searchQuery.trim() && movies?.length > 0 && (
              <Text className='text-white text-lg font-bold mt-4'>Search results for : { searchQuery }</Text>
            )}
          </>
        }
        ListEmptyComponent={
          !moviesLoading && !moviesError ? (
            <View className='flex-1 items-center justify-center mt-10'>
              <Text className='text-blue-300 text-lg font-bold'>
                { searchQuery.trim() ? 'No Results Found' : 'Search for a movie' }
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  )
}

export default Search;