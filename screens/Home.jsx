import {SafeAreaView, Alert, Text, View, FlatList, ActivityIndicator, RefreshControl, TouchableOpacity} from 'react-native';
import { Post } from '../components/Post';
import axios from 'axios'; 
import React from 'react'; 
import { Loadings } from '../components/Loading';

export const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [items, setItems] = React.useState();

  const fetchPosts = () => {
    setIsLoading(true);
    axios
      .get('https://6722fdd82108960b9cc652f2.mockapi.io/Test')
      .then(({data}) => {
        setItems(data);
      })
       .catch((err) => {
        Alert(err)
        console.log(err)
      }).finally(() => {
        setIsLoading(false);
      })
  }

  React.useEffect(fetchPosts, []);

  
  if(isLoading) {
    return(
      <Loadings>
          <SafeAreaView/>
          <ActivityIndicator size='large'/>
          <Text style={{marginTop: 15}}>Загрузка...</Text>
      </Loadings>   
    );
  }
    
  return (
    <View>
      <SafeAreaView />
      <FlatList
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />}
        data={items}
        keyExtractor={(item) => item.id.toString()} 

        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('FullPost', {id:item.id, title: item.title })}>
            <Post
              title={item.title}
              createdAt={item.createdAt}
              imageUrl={item.imageUrl}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
  
}


