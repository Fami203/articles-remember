import React from 'react'
import { View, Text, ActivityIndicator, SafeAreaView} from 'react-native'
import styled from 'styled-components/native';



export const Loadings = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`


export const Loading = () => {
    return (

        <>
        <SafeAreaView/>
        <Loadings>
            <ActivityIndicator size='large'/>
          <Text style={{marginTop: 15}}>Загрузка...</Text>
        </Loadings>
        </>

    );
};


