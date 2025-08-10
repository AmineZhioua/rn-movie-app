import { View, Text, TouchableOpacity, Image } from 'react-native'
import {Star} from 'lucide-react-native';
import React from 'react'
import { Link } from 'expo-router'

interface MovieCardProps {
    id: number,
    poster_path: string,
    title: string,
    vote_average: number,
    release_date: string
}

const MovieCard = ({ id, poster_path, title, vote_average, release_date }: MovieCardProps) => {
  return (
    <Link href={`/movies/${id}`} asChild>
        <TouchableOpacity className='w-[30%]'>
            <Image 
                source={{ uri: poster_path ? 
                    `https://image.tmdb.org/t/p/w500${poster_path}` : 
                    'https://placehold.co/600x400/1a1a1a/ffffff.png' 
                }}
                className='w-full h-52 rounded-lg'
                resizeMode='cover'
            />
            <Text className='text-white text-sm font-bold mt-2' numberOfLines={1}>{title}</Text>

            <View className='mt-2 flex-row items-center gap-2'>
                <Star color="#ffea00" size={14} fill={'#ffea00'} />
                <Text className='text-white text-sm font-bold'>{ Math.round(vote_average / 2) }</Text>
            </View>
            <Text className='text-[#eee] text-sm font-semibold'>{ release_date.split('-')[0] }</Text>
        </TouchableOpacity>
    </Link>
  )
}

export default MovieCard