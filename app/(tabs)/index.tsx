import { Text, View, Image, ScrollView, ActivityIndicator, FlatList } from "react-native";
import SearchBar from "../../components/SearchBar";
import { useRouter } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import MovieCard from "@/components/MovieCard";

export default function Index() {
  const router = useRouter();
  const { 
    data: movies, 
    loading: moviesLoading, 
    error: moviesError 
  } = useFetch(() => fetchMovies({ query: '' }) );

  return (
    <View className="flex-1 bg-primary">
      {/* Background */}
      <Image 
        source={require('../../assets/images/partial-react-logo.png')} 
        className="absolute z-0"
      />
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{ minHeight: '100%', paddingBottom: 10 }}>
        {/* Logo */}
        <Image 
          source={require('../../assets/images/favicon.png')} 
          className="w-12 h-10 mt-20 mb-5 mx-auto" 
        />

        {moviesLoading ? (
          <ActivityIndicator 
            size={'large'}
            color={'#fff'}
            className="self-center"
          />
        ) : moviesError ? (
          <Text>Error: {moviesError?.message}</Text>
        ) : (
          <View className="flex-1 mt-5">
            <SearchBar 
              onPress={() => router.push('/search')}
              placeholder="Search for a movie..."
            />
            <>
              <Text className="text-xl text-white font-bold mt-5 mb-3">Latest Movies:</Text>
              <FlatList 
                data={movies}
                renderItem={({ item }) => (
                  <MovieCard 
                    {...item}
                  />
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: 'flex-start',
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 10,
                }}
                className="pb-32 mt-2"
                scrollEnabled={false}
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
}