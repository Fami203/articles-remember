import styled from 'styled-components/native';
import React from 'react'
import { SafeAreaView, View } from 'react-native';
import axios from 'axios'; 
import { Loading } from '../components/Loading';

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
    font-size: 18px;
    line-height: 24px;
`


export const FullPostScreen = ({ route, navigation }) => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [data, setData] = React.useState();
    const {id, title} = route.params;

    
    React.useEffect(() => {
      navigation.setOptions({
        title,
      });
      axios
      .get('https://6722fdd82108960b9cc652f2.mockapi.io/Test/' + id)
      .then(({data}) => {
        setData(data);
      })
       .catch((err) => {
        Alert(err)
        console.log(err)
      }).finally(() => {
        setIsLoading(false);
      })
    }, []);

    if(isLoading) {
      return <Loading/>;
      
    };


  return (
    <View style={{padding:20}}>
        <SafeAreaView/>
        <PostImage source={{ uri: data.imageUrl}}/>
        <PostText>{data.text}</PostText>
    </View>
  )
}



