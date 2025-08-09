import { Text, View, Image, ScrollView } from "react-native";
import SearchBar from "../../components/SearchBar";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
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
        <View className="flex-1 mt-5">
          <SearchBar 
            onPress={() => router.push('/search')}
            placeholder="Search for a movie..."
          />
        </View>
      </ScrollView>
    </View>
  );
}
